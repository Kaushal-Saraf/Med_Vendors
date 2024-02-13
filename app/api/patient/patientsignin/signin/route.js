import { connectDb } from "@/helper/db";
const { patient } = require("@/models/patient");
const { NextResponse } = require("next/server");
export async function POST (req){
    const {aadharnumber,name,dob,gender,contact,password}= await req.json()
    await connectDb()
    try{
        const newpatient= new patient({
            aadharnumber:aadharnumber,
            name:name,
            contact:contact,
            gender:gender,
            dob:dob,
            password:password,
        })
        await newpatient.save()
        return NextResponse.json("new patient created sucessfully")
    }
    catch(error){
        return NextResponse.json("error")
    }
}