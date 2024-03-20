import { connectDb } from "@/helper/db";
import { doctor } from "@/models/doctor";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
export async function GET( req , {params} ){
  await connectDb();
  const {name, contact , supportingdocs} = await doctor.findOne({ _id: params.id });
  if (supportingdocs === undefined){
    const result = {
      "name": name,
      "contact": contact,
      "supportingdocs":  false,
    }
    return NextResponse.json( result, { status: 200 });
  }else {
    const result = {
      "name": name,
      "contact": contact,
      "supportingdocs":  true,
    }
    return NextResponse.json(result, { status: 200 });
  }
}