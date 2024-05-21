import { connectDb } from "@/helper/db";
import { patient } from "@/models/patient";
import { qr } from "@/models/qr";
import { NextResponse } from "next/server";
export async function GET( req , {params} ){
  await connectDb();
  const {aadharnumber} = await patient.findOne({ _id: params.id });
  const qrs = await qr.find({ aadhar:aadharnumber });
  return NextResponse.json( {qrg : qrs} , {status:200});
}