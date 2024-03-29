"use client";
import Belowformlinks from "@/app/Components/Belowformlinks";
import Contactinput from "@/app/Components/Contactinput";
import Formheading from "@/app/Components/Formheading";
import Nameinput from "@/app/Components/Nameinput";
import Passwordinput from "@/app/Components/Passwordinput";
import Submitbutton from "@/app/Components/Submitbutton";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const vendorsignin = () => {
  const [details, setdetails] = useState({
    name: "",
    nameVerifier: false,
    contact: "",
    contactVerifier: false,
    password: "",
    passwordVerifier: false,
    disabled: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      details.nameVerifier ||
      details.contactVerifier ||
      details.passwordVerifier
    ) {
      toast.dismiss();
      toast.error("Please fill all the fields correctly.");
      return;
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit}
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        name="form"
        id="form"
        disabled={details.disabled}
      >
        <Formheading heading="Vendor SignUp Form" />
        <Nameinput
          details={details}
          setdetails={setdetails}
        />
        <Contactinput
          details={details}
          setdetails={setdetails}
        />
        <Passwordinput
          details={details}
          setdetails={setdetails}
          autoComplete="new-password"
        />
        <Submitbutton buttonname="Signin" disabled={details.disabled} />
      </form>
      <Belowformlinks
        text="Already have an account Click Here"
        redirectpage="/Vendor/Vendorlogin"
      />
    </>
  );
};

export default vendorsignin;
