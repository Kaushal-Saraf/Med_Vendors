// import { qrCodeDetector } from "@/Services/qrCodeDetector";
// import { connectDb } from "@/helper/db";
const { NextResponse } = require("next/server");
export async function POST(req) {
  const { image } = await req.json();
  return NextResponse.json({image});
}
