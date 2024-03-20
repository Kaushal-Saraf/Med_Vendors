"use client";
import Belowformlinks from "@/app/Components/Belowformlinks";
import Contactinput from "@/app/Components/Contactinput";
import Formheading from "@/app/Components/Formheading";
import Passwordinput from "@/app/Components/Passwordinput";
import Submitbutton from "@/app/Components/Submitbutton";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const vendorlogin = () => {
  const [details, setdetails] = useState({
    contact: "",
    contactVerifier: false,
    passowrd: "",
    passowrdVerifier: false,
    disabled: false,
  });
  return (
    <>
      <Toaster position="top-right" />
      <form className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm">
        <Formheading heading="Vendor Login Form" />
        <Contactinput
          details={details}
          setdetails={setdetails}
          disabled={details.disabled}
        />
        <Passwordinput
          details={details}
          setdetails={setdetails}
          disabled={details.disabled}
        />
        <Submitbutton buttonname="Login" disabled={details.disabled} />
      </form>
      <Belowformlinks
        text="Don't have an account Click Here"
        redirectpage="/Vendor/Vendorsignin"
      />
    </>
  );
};

export default vendorlogin;
