import { qrCodeDetector } from "@/Services/qrCodeDetector";
import { NextResponse } from "next/server";
export async function POST(req){
  const data = await req.body;
  console.log(data);
  return NextResponse.json({message: data});
}