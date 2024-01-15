const { connectDb } = require("@/helper/db");
const { patient } = require("@/models/patient");
const { NextResponse } = require("next/server");
connectDb();
export async function POST (req){
    const {aadharnumber,firstname,lastname,dob,contact,password}= await req.json()
    const aadharIsPresent = await patient.find({aadharnumber:aadharnumber})
    if(aadharIsPresent.length===1){
        return NextResponse.json("invalid aadhar number",{status:500})
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
        console.log(error)
        return NextResponse.json("error")
    }
}