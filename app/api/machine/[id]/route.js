import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";

import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  await connectDb();
  const   machinedetails  = await machine.findOne({ umid: params.id });
  machinedetails.medicinedetails.sort((a, b) => a.slot - b.slot);
  return NextResponse.json(machinedetails );
}

