import fs from 'fs'
import { promisify } from 'util';
import { NextResponse } from "next/server";
import { Stream } from 'stream';
export async function POST(req){
  const data = await req.json();
  console.log(data);
  return NextResponse.json({message: "hwlo"});
}