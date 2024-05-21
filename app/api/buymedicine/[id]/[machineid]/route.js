import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";
import { prescription } from "@/models/prescription";
import { qr } from "@/models/qr";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  await connectDb();
  const machinedata = await machine.findOne({ umid: params.machineid });
  const prescriptionDetails = await prescription.findOne({ _id: params.id });
  const requiredmedicine = prescriptionDetails.medicines.map((medicine) => {
    return {
      medicinename: medicine.name + medicine.dosage,
      noofcpasules: medicine.timeperiod * medicine.dailyfrequency,
    };
  });
  const medicineinmachine = machinedata.medicinedetails.map((medicine) => {
    return {
      medicinename: medicine.name + medicine.dosage,
      noofcpasules: Number(medicine.cpsuleeachpack) * Number(medicine.notsold),
    };
  });
  if(prescriptionDetails.status){
      return NextResponse.json({message: "Medicines alreday bought"},{status:403});
  }
  const compare = requiredmedicine.every((med1) =>
    medicineinmachine.some(
      (med2) =>
        med2.medicinename === med1.medicinename &&
        med2.noofcpasules >= med1.noofcpasules
    )
  );
  if (!compare) {
    return NextResponse.json(
      { message: "Medicne not available in the machine" },
      { status: 403 }
    );
  }
  // only for unique elements in array
  const reqarray = prescriptionDetails.medicines.map((medicine) => {
    const matchedMedicine = machinedata.medicinedetails.find(
      (machinemedicine) => {
        return machinemedicine.name === medicine.name;
      }
    );
    return Number(matchedMedicine.slot);
  });
  reqarray.forEach((slot) => {
    const matchedMedicine = machinedata.medicinedetails.find(
      (medicine) => medicine.slot == slot
    );
    if (matchedMedicine) {
      matchedMedicine.notsold--;
      matchedMedicine.soldandnotcollected++;
    }
  });
  reqarray.sort((a, b) => a - b);
  const qrarray = reqarray.map((value) => [value, 1]).flat();
  const d = new Date();
  const newqr = {
    uid: String(prescriptionDetails.aadharnumber) + String(d.getTime()),
    aadhar: prescriptionDetails.aadharnumber,
    umid: params.machineid,
    medicinedata: qrarray,
    used: false,
  };
  await prescription.updateOne({ _id: params.id }, { status: true });
  await qr.create(newqr);
  await machine.updateOne(
    { umid: params.machineid },
    { medicinedetails: machinedata.medicinedetails }
  );
  return NextResponse.json({ message: "Medicne bought sucessfully" });
}
