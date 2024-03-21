"use client";
import { patientSignIn } from "@/Services/patientservices";
import Belowformlinks from "@/app/Components/Belowformlinks";
import Formheading from "@/app/Components/Formheading";
import Otpinput from "@/app/Components/Otpinput";
import Submitbutton from "@/app/Components/Submitbutton";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Verifyotp = () => {
  const router = useRouter();
  const [details, setdetails] = useState({
    otp:"",
    otpVerifier:false,
    disabled:false,
  });
  const [contact, setcontact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length != 6) {
      toast.dismiss();
      toast.error("Otp must be 6 digits only.");
      return;
    }
    const token = sessionStorage.getItem("patientOtp");
    const details = { otp: otp, token: token };
    toast.dismiss();
    toast.loading("Signin...");
    try {
      await patientSignIn(details);
      toast.dismiss();
      sessionStorage.removeItem("patientOtp");
      router.push("/Patient/Patientlogin");
    } catch (error) {
      setcontact(error.response.data.contact);
      toast.dismiss();
      toast.error("Otp doesn't matchs.");
    }
  };

  return (
    <>
      <Toaster position="top-right"></Toaster>
      <form
        onSubmit={handleSubmit}
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        disabled={details.disabled}
      >
        <Formheading heading="OTP Verification form" />
        <Otpinput details={details} setdetails={setdetails} disabled={details.disabled}/>
        <Submitbutton buttonname="Signin" disabled={details.disabled} />
      </form>
      {contact ? (
        <Belowformlinks
          redirectpage="/Patient/Patientsignin"
          text={`Not your contact number ${contact} ?`}
        />
      ) : null}
    </>
  );
};

export default Verifyotp;