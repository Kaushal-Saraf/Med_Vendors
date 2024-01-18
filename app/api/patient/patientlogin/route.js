import { connectDb } from "@/helper/db"
import { patient } from "@/models/patient"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"
export async function POST(req){
    const{aadharnumber,password}= await req.json()
    try{
        await connectDb()
        const user = await patient.findOne({aadharnumber:aadharnumber})
        if(user===null){
            throw new Error("User not found!")
        }
        if(user.password!==password){
            throw new Error("Password do not match!")
        }
        const token = jwt.sign({
            _id:user._id,
            aadharnumber:user.aadharnumber
        },process.env.JWT_KEY)
        const response = NextResponse.json({
            message:"Login successful",
        })
        response.cookies.set("patientLoginToken",token,{expiresIn:"3d"},{httpOnly:true})
        return response
    }
    catch(error){
        return NextResponse.json({"error":error.message},{status:403})
    }
}