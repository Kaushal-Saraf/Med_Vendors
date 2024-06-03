import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";
import { patient } from "@/models/patient";
import { prescription } from "@/models/prescription";
import { qr } from "@/models/qr";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  await connectDb();
  const machinedata = await machine.findOne({ umid: params.machineid });
  const prescriptionDetails = await prescription.findOne({ _id: params.id });
  if (prescriptionDetails.status) {
    return NextResponse.json(
      { message: "Medicines alreday bought" },
      { status: 403 }
    );
  }
  const compare = prescriptionDetails.medicines.every((med1) =>
    machinedata.medicinedetails.some(
      (med2) =>
        med2.name === med1.name &&
        Number(med2.dosage) === med1.dosage &&
        Number(med2.cpsuleeachpack) * Number(med2.notsold) >=
          med1.timeperiod * med1.dailyfrequency
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
  // const patientid = await patient.findOne({aadharnumber:prescriptionDetails.aadharnumber});
  return NextResponse.json({ message: "Medicne bought sucessfully", patient: patientid._id });
}
