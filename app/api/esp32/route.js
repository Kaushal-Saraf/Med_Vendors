import { NextResponse } from "next/server";
import qrCodeDetector from "@/Services/qrCodeDetector";
import { connectDb } from "@/helper/db";
import { qr } from "@/models/qr";
export async function POST(req){
  await connectDb();
  const { image } = await req.json();
  const qrRes = await qrCodeDetector(image)
  if(qrRes===null){
    return NextResponse.json("No Qr Found");
  }
  else{
    const result = await qr.findOne({uid: qrRes})
    if(result===null){
      return NextResponse.json("Wrong Qr Found");
    }
  }
}