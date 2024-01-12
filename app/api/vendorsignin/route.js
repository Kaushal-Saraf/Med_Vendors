import { vendor } from "@/models/vendor";
import { NextResponse } from "next/server";
const { connectDb } = require("@/helper/db");
connectDb();
export async function POST (req){
    const {mid,name,contact,password,machinedeatails}= await req.json()
    console.log(mid);
    try{
        const nvendor= new vendor({
            mid:mid,
            name:name,
            contact:contact,
            password:password,
            machinedeatails:machinedeatails
        })
        await nvendor.save()
        return NextResponse.json("new vendor created sucessfully")
    }
    catch(error){
        console.log(error)
        return NextResponse.json("error")
    }
}
