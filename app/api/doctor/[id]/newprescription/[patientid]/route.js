import { connectDb } from "@/helper/db";
import { doctor } from "@/models/doctor";
import { patient } from "@/models/patient";
import { prescription } from "@/models/prescription";
import { NextResponse } from "next/server";
export async function GET( req , {params} ){
  await connectDb();
  console.log(params)
  
}