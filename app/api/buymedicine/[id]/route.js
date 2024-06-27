import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";

import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  await connectDb();
  const machinedetails = await machine.find();
  return NextResponse.json(machinedetails);
}

