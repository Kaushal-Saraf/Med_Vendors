"use client";
import React from "react";

const vendorsignin = () => {
  return (
    <>
      <form className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm">
        <h1 className="text-center bg-blue-300 text-white font-bold rounded-t-lg shadow-sm">
          Vendor Signin Form
        </h1>
        <div className="flex my-12 px-2 w-full">
          <label htmlFor="name" className="flex-1 text-center text-blue-400 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="given-name"
            placeholder="Raju Verma"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label htmlFor="contact" className="flex-1 text-center text-blue-400 font-semibold">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="9999999999"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label htmlFor="password" className="flex-1 text-center text-blue-400 font-semibold">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="*****"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
          ></input>
        </div>
        <div className="flex w-full justify-center">
          <button className="text-center bg-blue-400 px-2 py-1 rounded text-white">
            Send OTP
          </button>
        </div>
      </form>
    </>
  );
};

export default vendorsignin;
