import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
connectDb();
export function GET(req){
 return NextResponse.json({"11":"hello"});
}