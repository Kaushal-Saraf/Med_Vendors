const { connectDb } = require("@/helper/db");
const { patient } = require("@/models/patient");
const { NextResponse } = require("next/server");
connectDb();