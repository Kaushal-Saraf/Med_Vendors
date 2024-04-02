import Link from "next/link";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const vendorid = ({ params }) => {
  return (
    <div>
      <div className="flex justify-between mt-4">
        <p className=" text-blue-500 text-md mx-2">My machines</p>
        <Link
          className="flex text-blue-500 text-md mx-2 hover:text-white"
          href={`/Vendor/${params.id}/Addmachine`}
        >
          Add machines
          <IoMdAddCircleOutline className="mt-[0.35rem] mx-1" />
        </Link>
      </div>
      <hr className="border-blue-500" />
    </div>
  );
};

export default vendorid;
