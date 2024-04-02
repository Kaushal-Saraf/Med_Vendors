import getLocation from "@/Services/getlocation";
import { connectDb } from "@/helper/db";
import { vendor } from "@/models/vendor";
import { NextResponse } from "next/server";
export async function POST(req) {
  const { umid, address } = await req.json();
  await connectDb();
  const add = await getLocation(address);
  console.log(add);
  return NextResponse.json({message:"Hello"})
}
