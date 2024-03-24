import { connectDb } from "@/helper/db";
import { doctor } from "@/models/doctor";
import { patient } from "@/models/patient";
import { NextResponse } from "next/server";

export async function POST(req, {params}){
    await connectDb();
    const { aadhar } = await req.json();
    const reqpatient = await patient.findOne({aadharnumber:aadhar});
    const doc = await doctor.findOne({_id: params.id});
    if(reqpatient===null){
        return NextResponse.json({message:"Patient not found!"},{status:401});
    }else{
        const res = {
            docName: doc.name,
            docContact: doc.contact,
            aadhar: reqpatient.aadharnumber,
            name: reqpatient.name,
            dob : reqpatient.dob,
            gender : reqpatient.gender,
            contact : reqpatient.contact,
        }
        return NextResponse.json(res);
    }
}