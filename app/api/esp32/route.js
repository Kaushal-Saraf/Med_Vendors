import { NextResponse } from "next/server";
import qrCodeDetector from "@/Services/qrCodeDetector";
import { connectDb } from "@/helper/db";
import { qr } from "@/models/qr";
import { machine } from "@/models/machine";
export async function POST(req) {
  await connectDb();
  const { image, machinename } = await req.json();
  const qrRes = await qrCodeDetector(image);
  if (qrRes === null) {
    return NextResponse.json({ 1: "No Qr Found" });
  } else {
    const result = await qr.findOne({ uid: qrRes.data });
    if (result === null) {
      return NextResponse.json({ 2: "Wrong Qr Found" });
    }
    if (result.used === true) {
      return NextResponse.json({ 3: "Qr already used" });
    }
    if (result.umid != machinename) {
      return NextResponse.json({ 4: "Wrong Machine" });
    }
    const machinedata =  await machine.findOne({umid: machinename});
    console.log(machinedata);
    result.medicinedata.forEach((slot,index) => {
      const matchedMedicine = machinedata.medicinedetails.find(
        (medicine) => medicine.slot == slot
      );
      if (matchedMedicine && index%2==0) {
        matchedMedicine.sold++;
        matchedMedicine.soldandnotcollected--;
      }
    });
    await machine.updateOne(
      { umid: params.machineid },
      { medicinedetails: machinedata.medicinedetails }
    );
    // await qr.updateOne({ uid: qrRes.data }, { used: true });
    return NextResponse.json(result.medicinedata);
  }
}
