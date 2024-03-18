import fs from 'fs'
import { promisify } from 'util';
import { NextResponse } from "next/server";
import { Stream } from 'stream';
export async function POST(req){
  const data = await req.json();
  console.log(data)
  console.log(data.image[0] + data.image[1] + data.image[data.image.length-2] + data.image[data.image.length - 1]);
  return NextResponse.json({message: "hwlo"});
}