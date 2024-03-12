import { NextResponse } from "next/server";

export async function POST(req){
  const imageBuffer = await req.body;
  console.log(imageBuffer.length)
  return NextResponse.json({message: imageBuffer.length});
}