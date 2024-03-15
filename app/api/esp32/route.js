import { NextResponse } from "next/server";
export async function POST(req){
  const data = await req.formData();
  const image = data.get('image');
  const buffer = await image.arrayBuffer();
  console.log(buffer)
  console.log(image)
  return NextResponse.json({message: data});
}