"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const [details, setdetails] = useState({
    name: "",
    contact: "",
    password: "",
    supportingdocuments: false,
    checkbox: false,
    disabled:false
  });
  const handleDetails = async (event) => {
    event.preventDefault();
    if (details.name === "") {
      toast.dismiss();
      toast.error("Name cannot be empty.");
      return;
    } else if (details.contact.length !== 10) {
      toast.dismiss();
      toast.error("Contact must have 10 digits.");
      return;
    } else if (details.password.length < 8) {
      toast.dismiss();
      toast.error("Password is too sort.");
      return;
    } else if (!details.supportingdocuments) {
      toast.dismiss();
      toast.error("Please attach your doctrate degree.");
      return;
    } else if (!details.checkbox) {
      toast.dismiss();
      toast.error("Please confirm that you are a doctor.");
      return;
    }
    setdetails({
      ...details,
      disabled:true
    })
    toast.dismiss()
    toast.loading("Sending OTP. Please wait...");
  };
  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleDetails}
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        disabled={details.disabled}
      >
        <h1 className="text-center bg-blue-300 text-white font-bold rounded-t-lg shadow-sm">
          Doctor Signin Form
        </h1>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="name"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Raju"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="name"
            id="name"
            autoComplete="name"
            onChange={(event) => {
              setdetails({
                ...details,
                name: event.target.value,
              });
            }}
            value={details.name}
            readOnly={details.disabled}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="contact"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Contact
          </label>
          <input
            type="number"
            placeholder="9999999999"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="contact"
            id="contact"
            onChange={(event) => {
              setdetails({
                ...details,
                contact: event.target.value,
              });
            }}
            value={details.contact}
            readOnly={details.disabled}
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
            placeholder="*****"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="password"
            id="password"
            onChange={(event) => {
              setdetails({
                ...details,
                password: event.target.value,
              });
            }}
            value={details.password}
            readOnly={details.disabled}
          ></input>
        </div>
        <div className="flex mt-12 px-2 w-full">
          <label
            htmlFor="documents"
            className="text-center w-[136.67px] text-blue-400 font-semibold"
          >
            Degree
          </label>
          <input
            type="file"
            name="documents"
            accept="application/pdf"
            className="text-center mx-2 w-[181.33px] bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="documents"
            onChange={(event) => {
              setdetails({
                ...details,
                supportingdocuments: event.target.files
                  ? event.target.files
                  : details.supportingdocuments,
              });
            }}
            disabled={details.disabled}
          ></input>
        </div>
        <div className="text-blue-400 font-thin text-sm text-center">
          supported format is pdf only
        </div>
        <div className="flex my-12 px-2 w-full justify-center">
          <input
            type="checkbox"
            className="text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="consent"
            id="consent"
            onChange={(event) => {
              setdetails({
                ...details,
                checkbox: event.target.checked,
              });
            }}
            value={details.checkbox}
            disabled={details.disabled}
          ></input>
          <label
            htmlFor="consent"
            className="text-center text-blue-400 text-sm"
          >
            I am a cerified doctor.
          </label>
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="text-center bg-blue-400 px-2 py-1 rounded text-white"
            disabled={details.disabled}
          >
            Signin
          </button>
        </div>
      </form>
    </>
  );
};

export default page;
