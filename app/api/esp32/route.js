import { NextResponse } from "next/server";
import qrCodeDetector from "@/Services/qrCodeDetector";
import { connectDb } from "@/helper/db";
import { qr } from "@/models/qr";
import { machine } from "@/models/machine";
export async function POST(req){
  await connectDb();
  const { image , machinename } = await req.json();
  const qrRes = await qrCodeDetector(image);
  if(qrRes===null){
    return NextResponse.json({1 : "No Qr Found"});
  }
  else{
    const result = await qr.findOne({uid: qrRes.data})
    if(result===null){
      return NextResponse.json({2 : "Wrong Qr Found"});
    }
    if(result.used === true){
      return NextResponse.json({3 : "Qr already used"})
    }
    if(result.umid != machinename){
      return NextResponse.json({4 : "Wrong Machine"})
    }
    await qr.updateOne({uid:qrRes},{used:true});
    //update sold status
    await machine.updateOne({})
    return NextResponse.json(qr.medicinedata)
  }
}