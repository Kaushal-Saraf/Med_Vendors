import fs from 'fs'
import { promisify } from 'util';
import { NextResponse } from "next/server";
export async function POST(req){
  const data = await req.body;
  console.log(data.image[0] + data.image[image.length -1]);
  return NextResponse.json({message: "hwlo"});
}