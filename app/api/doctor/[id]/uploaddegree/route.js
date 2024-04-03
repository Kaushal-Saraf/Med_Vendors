import uploadFile from "@/Services/fileupload";
import { connectDb } from "@/helper/db";
import { doctor } from "@/models/doctor";
import { NextResponse } from "next/server";

export async function POST(req, {params}){
    await connectDb();
    const doc = await doctor.findOne({_id:params.id});
    const data = await req.formData();
    const file = data.get('file');
    try{
        await uploadFile(file, doc.contact);
        await doctor.updateOne({_id:params.id},{ $set:{supportingdocs:`${doc.contact}.pdf`}})
    }
    catch(e){
        console.log(e);
    }
    return NextResponse.json("Upload sucessful.")
}
    