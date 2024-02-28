"use client";
import Link from "next/link";
import React from "react";
const doctorlogin = () => {
  return (
    <>
      <form className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm">
        <h1 className="text-center bg-blue-300 text-white font-bold rounded-t-lg shadow-sm">
          Doctor Login Form
        </h1>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="contact"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Contact
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="9999999999"
            autoComplete="tel-national"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="password"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="given-password"
            placeholder="*****"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
          ></input>
        </div>
        <div className="flex w-full justify-center">
          <button className="text-center bg-blue-400 px-2 py-1 rounded text-white">
            Login
          </button>
        </div>
      </form>
      <div className="flex justify-center px-2 mt-[-1.5rem] mb-12">
        <Link
          href="/Doctor/Doctorsignin"
          className="font-bold text-blue-400 bg-white px-1 rounded-md"
        >
          Don't have an account Click Here
        </Link>
      </div>
    </>
  );
};

export default doctorlogin;
