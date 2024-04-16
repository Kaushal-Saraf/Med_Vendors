import { connectDb } from "@/helper/db";
import { machine } from "@/models/machine";
import { vendor } from "@/models/vendor";
import { NextResponse } from "next/server";
export async function POST(req, { params }) {
  await connectDb();
  const { umid, address, longitude, latitude } = await req.json();
  const machinedata = await machine.findOne({ umid: umid });
  if (machinedata) {
    const vendordata = await vendor.findOne({ _id: params.id });
    return NextResponse.json(
      { message: "Machine added sucessfully" }
    );
  } else {
    return NextResponse.json(
      { message: "No Machine Data Found" },
      { status: 403 }
    );
  }
}
