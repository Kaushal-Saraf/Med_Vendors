import { vendor } from "@/models/vendor";
import { NextResponse } from "next/server";
const { connectDb } = require("@/helper/db");
connectDb();
export async function POST (req){
    const {name,contact,password}= await req.json()
    try{
        const nvendor= new vendor({
            name:name,
            contact:contact,
            password:password
        })
        await nvendor.save()
        return NextResponse.json("new vendor created sucessfully")
    }
    catch(error){
        console.log(error)
        return NextResponse.json("error")
    }
}
