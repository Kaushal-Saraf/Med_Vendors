import { qrCodeDetector } from "@/Services/qrCodeDetector";
import { NextResponse } from "next/server";
export async function POST(req){
  const data = await req.formData();
  console.log(data.get('image'))
  const image = data.get('image');
  qrCodeDetector(image);
  return NextResponse.json({message: data});
}