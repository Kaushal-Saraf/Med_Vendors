import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";
import { vendor } from "@/models/vendor";
import { NextResponse } from "next/server";
export async function POST(req, { params }) {
  await connectDb();
  const { umid, address, longitude, latitude } = await req.json();
  const machinedata = await machine.find();
  if (machinedata.length) {
    const vendordata = await vendor.findOne({ _id: params.id });
  }
  else{
    return NextResponse.json({message: "No Machine Data Found"},{status:403});
  }
  
}
