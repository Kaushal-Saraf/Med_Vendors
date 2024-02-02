"use client";
import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <div className="h-8 px-5 bg-blue-300 text-white text-center py-0.5">
      <Link className="font-extrabold font-mono text-xl" href="/">
        MV
      </Link>
    </div>
  );
};

export default Header;
