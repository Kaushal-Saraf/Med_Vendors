import { NextResponse } from "next/server";

export async function POST(req){
  const data = await req.formData();
  return NextResponse.json({message: data.get('image').name});
}