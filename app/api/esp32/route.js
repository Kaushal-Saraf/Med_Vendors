import fs from 'fs'
import { promisify } from 'util';
import { NextResponse } from "next/server";
export async function POST(req){
  const data = await req.body;
  console.log(data);
  return NextResponse.json({message: "hwlo"});
}