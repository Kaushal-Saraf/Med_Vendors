"use client";
import Link from "next/link";
import React from "react";
import { GiVendingMachine } from "react-icons/gi";

const Landingcardvendor = () => {
  return (
    <div>
      <div className="w-full h-40 bg-white flex rounded-[10px] my-10 justify-center text-center">
        <GiVendingMachine className=" h-40 mx-5 text-blue-100 flex-auto w-32" />
        <div className="flex-auto w-64">
          <ul className="text-blue-500 font-bold display my-4">
            <li>High Security.</li>
            <li>Easy to maintain stock.</li>
            <li>Reduce the chances of any error.</li>
          </ul>
        </div>
        <div className=" flex-auto w-32">
          <div className="my-6">
            <Link
              href="/Vendor/Vendorsignin"
              className="bg-blue-300 text-white rounded text-center px-2 py-1"
            >
              Vendor Signin
            </Link>
          </div>
          <div className="my-6">
            <Link
              href="/Vendor/Vendorlogin"
              className="bg-blue-300 text-white rounded text-center px-2 py-1"
            >
              Vendor Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingcardvendor;
