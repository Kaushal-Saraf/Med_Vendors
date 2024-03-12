import { NextResponse } from "next/server";

export async function POST(req){
  const data = await req.formData();
  const id = data.get('image');
  console.log(id);
  return NextResponse.json({message: 'ok'});
}