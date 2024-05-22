import { NextResponse } from "next/server";
import qrCodeDetector from "@/Services/qrCodeDetector";
import { connectDb } from "@/helper/db";
import { qr } from "@/models/qr";
import { machine } from "@/models/machine";
export async function POST(req){
  await connectDb();
  const { image , machinename } = await req.json();
  const qrRes = await qrCodeDetector(image)
  if(qrRes===null){
    return NextResponse.json({1 : "No Qr Found"});
  }
  else{
    const result = await qr.findOne({uid: qrRes})
    if(result===null){
      return NextResponse.json({2 : "Wrong Qr Found"});
    }
    if(qr.used === true){
      return NextResponse.json({3 : "Qr already used"})
    }
    if(qr.umid != umid){
      return NextResponse.json({4 : "Wrong Machine"})
    }
    await qr.updateOne({uid:qrRes},{used:true});
    await machine.findOne({umid: qr.umid});
    return NextResponse.json(qr.medicinedata)
  }
}