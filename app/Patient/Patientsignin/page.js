"use client";
import { sendOTP } from "@/Services/patientservices";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import recognizeText from "@/Utilites/dataextract";
import dateconverter from "@/Utilites/dateconverter";
import toast from "react-hot-toast";
import Toastercomp from "@/Components/Toastercomp";
import today from "@/Utilites/todayhtml";
import Link from "next/link";
const page = () => {
  const router = useRouter();
  const [details, setdetails] = useState({
    image: false,
    aadharnumber: "",
    name: "",
    dob: "",
    gender: "Male",
    contact: "",
    password: "",
    checkbox: false,
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const clearFormData = () => {
    setdetails({
      ...details,
      image: false,
      aadharnumber: "",
      name: "",
      dob: "",
      gender: "Male",
      contact: "",
      password: "",
      checkbox: false,
    });
  };
  const updateFormData = async (aadhar) => {
    setIsDisabled(true);
    toast.dismiss();
    toast.loading("Fetching data.");
    try {
      const { data } = await recognizeText(aadhar);
      if (data.text === "" || data.text === null) {
        throw new Error();
      }
      const text = data.text.replace(/(\r\n|\n|\r)/gm, " ");
      const dobRegex = /DOB: (\d{2}\/\d{2}\/\d{4})/g;
      const dobMatch = dobRegex.exec(text);
      const dob = dobMatch ? dateconverter(dobMatch[1]) : "";
      const genderRegex = /MALE|FEMALE|TRANSGENDER/g;
      const genderMatch = genderRegex.exec(text);
      const gender = genderMatch ? genderMatch[0] : "";
      const aadhaarRegex = /\b\d{4} \d{4} \d{4}\b/g;
      const aadhaarMatch = aadhaarRegex.exec(text);
      const aadhaar = aadhaarMatch ? aadhaarMatch[0].replace(/\s/g, "") : "";
      setdetails({
        ...details,
        image: true,
        aadharnumber: aadhaar,
        dob: dob,
        gender: gender,
      });
      toast.dismiss();
      toast.success("Data fetched sucessfully");
      setIsDisabled(false);
    } catch (error) {
      toast.dismiss();
      toast.error("Please upload photo again.");
      setIsDisabled(false);
    }
  };
  const handleSendOtp = async (event) => {
    event.preventDefault();
    if (!details.image) {
      toast.dismiss();
      toast.error("Upload aadhar image.");
      return;
    } else if (details.aadharnumber.length !== 12) {
      toast.dismiss();
      toast.error("Enter correct aadhar number.");
      return;
    } else if (details.name === "") {
      toast.dismiss();
      toast.error("Name cannot be empty.");
      return;
    } else if (details.dob === "") {
      toast.dismiss();
      toast.error("Dob cannot be empty.");
      return;
    } else if (details.contact.length !== 10) {
      toast.dismiss();
      toast.error("Please enter correct contact number.");
      return;
    } else if (details.password.length < 8) {
      toast.dismiss();
      toast.error("Password is too sort enter new password.");
      return;
    } else if (!details.checkbox) {
      toast.dismiss();
      toast.error("Please select the checkbox.");
      return;
    }
    setIsDisabled(true);
    try {
      toast.dismiss();
      toast.loading("sending otp...");
      const token = await sendOTP(details);
      sessionStorage.setItem("patientOtp", token);
      toast.dismiss();
      setIsDisabled(false);
      clearFormData();
      router.push("/Patient/Patientsignin/Verifyotp");
    } catch (error) {
      toast.dismiss();
      toast.error("Aadhar number already exists try to login.");
      setIsDisabled(false);
    }
  };
  return (
    <>
      <Toastercomp />
      <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={handleSendOtp}
        id="signinform"
        name="signinform"
        disabled={isDisabled}
      >
        <h1 className="text-center bg-blue-300 h-8 text-white py-0.5 font-bold rounded-t-lg shadow-sm">
          Patient Signin Form
        </h1>
        <div className="flex mt-12 px-2 w-full">
          <label
            htmlFor="aadhar"
            className="w-[136.67px] text-center text-blue-400 font-semibold"
          >
            Aadhar Image
          </label>
          <input
            type="file"
            id="aadhar"
            name="aadhar"
            accept="image/jpeg, image/jpg, image/png"
            className="w-[181.33px] text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            onChange={async (event) => {
              if (event.target.files.length !== 0) {
                await updateFormData(event.target.files[0]);
              } else {
                clearFormData();
              }
            }}
            disabled={isDisabled}
          ></input>
        </div>
        <div className="text-blue-400 font-thin text-sm text-center">
          supported formats are png, jpg, jpeg
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="name"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Name
          </label>
          <input
            readOnly={isDisabled}
            type="text"
            placeholder="Raju"
            autoComplete="given-name"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="name"
            name="name"
            onChange={(event) => {
              setdetails({
                ...details,
                name: event.target.value,
              });
            }}
            value={details.name}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="aadharnumber"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Aadhar Number
          </label>
          <input
            readOnly={isDisabled}
            type="number"
            placeholder="999999999999"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="aadharnumber"
            name="aadharnumber"
            onChange={(event) => {
              setdetails({
                ...details,
                aadharnumber: event.target.value,
              });
            }}
            value={details.aadharnumber}
          />
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="dob"
            className="w-[136.67px] text-center text-blue-400 font-semibold"
          >
            DOB
          </label>
          <input
            readOnly={isDisabled}
            type="date"
            className="w-[181.33px] text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="dob"
            name="dob"
            autoComplete="bday"
            min="1900-01-01"
            max={today()}
            onChange={(event) => {
              setdetails({
                ...details,
                dob: event.target.value,
              });
            }}
            value={details.dob}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="gender"
            className="w-[136.67px] text-center text-blue-400 font-semibold"
          >
            Gender
          </label>
          <select
            disabled={isDisabled}
            className="w-[181.33px] text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="gender"
            id="gender"
            autoComplete="sex"
            onChange={(event) => {
              setdetails({
                ...details,
                gender: event.target.value,
              });
            }}
            value={details.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </select>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="contact"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Contact
          </label>
          <input
            readOnly={isDisabled}
            type="number"
            placeholder="9999999999"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="contact"
            id="contact"
            autoComplete="tel-national"
            onChange={(event) => {
              setdetails({
                ...details,
                contact: event.target.value,
              });
            }}
            value={details.contact}
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
            readOnly={isDisabled}
            type="password"
            placeholder="*******"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => {
              setdetails({
                ...details,
                password: event.target.value,
              });
            }}
            value={details.password}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full justify-center">
          <input
            disabled={isDisabled}
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
          ></input>
          <label
            htmlFor="consent"
            className="text-center text-blue-400 text-sm"
          >
            The info I gave is accurate to my knowledge.
          </label>
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="text-center bg-blue-400 px-2 py-1 rounded text-white"
            disabled={isDisabled}
          >
            Send OTP
          </button>
        </div>
      </form>
      <div className="flex justify-center px-2 mt-[-1.5rem] mb-12">
        <Link
          href="/Patient/Patientlogin"
          className="font-bold text-blue-400 bg-white px-1 rounded-md"
        >
          Already have an account Click Here
        </Link>
      </div>
    </>
  );
};

export default page;
