import { NextResponse } from "next/server";

export async function POST(req){
  const data = await req.formData();
  console.log(data.get('image').name); 
  return NextResponse.json({message: data.name});
}