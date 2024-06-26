import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  await connectDb();
  const data = await req.json();
  const newmedicine = {
    slot: Number(data.slot),
    name: data.medicinename,
    // dosage: data.dosage,
    cpsuleeachpack: Number(data.capsuleeachpack),
    expiry: data.expiry,
    price: Number(data.price),
    sold: 0,
    soldandnotcollected: 0,
    notsold: Number(data.quantity),
  };

  const machinedetails = await machine.findOne({ umid: params.id });
  const prevmedicine = machinedetails.medicinedetails;
  const slots = prevmedicine.map((medicine) => medicine.slot);
  if (slots.includes(newmedicine.slot)) {
    await machine.updateOne(
      { umid: params.id },
      { $pull: { medicinedetails: { slot: newmedicine.slot } } }
    );
    await machine.updateOne(
      { umid: params.id },
      { $push: { medicinedetails: newmedicine } }
    );
  } else {
    await machine.updateOne(
      { umid: params.id },
      { $push: { medicinedetails: newmedicine } }
    );
  }
  const newmachinedetails = await machine.findOne({ umid: params.id });
  newmachinedetails.medicinedetails.sort((a, b) => a.slot - b.slot);
  return NextResponse.json({
    message: "Medicine added sucessfully.",
    medicinedetails: newmachinedetails.medicinedetails,
  });
}
