import { connectDb } from "@/helper/db";
const { patient } = require("@/models/patient");
const { NextResponse } = require("next/server");
export async function POST (req){
    const {aadharnumber,firstname,lastname,dob,contact,password}= await req.json()
    await connectDb()
    const aadharIsPresent = await patient.find({aadharnumber:aadharnumber})
    if(aadharIsPresent.length===1){
        return NextResponse.json("invalid aadhar number",{status:403})
    }
    try{
        const npatient= new patient({
            aadharnumber:aadharnumber,
            firstname:firstname,
            lastname:lastname,
            contact:contact,
            dob:dob,
            password:password,
        })
        await npatient.save()
        return NextResponse.json("new patient created sucessfully")
    }
    catch(error){
        return NextResponse.json("error")
    }
}