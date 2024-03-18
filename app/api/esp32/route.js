import { NextResponse } from "next/server";
import qrCodeDetector from "@/Services/qrCodeDetector";
export async function POST(req){
  const { image } = await req.json();
  const qrRes = await qrCodeDetector(image)
  if(qrRes===null){
    return NextResponse.json("No Qr Found");
  }
  else{
    return NextResponse.json(qrRes.data)
  }
}