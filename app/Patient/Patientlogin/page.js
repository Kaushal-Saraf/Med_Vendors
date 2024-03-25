"use client";

import Aadharinput from "@/app/Components/Aadharinput";
import Belowformlinks from "@/app/Components/Belowformlinks";
import Formheading from "@/app/Components/Formheading";
import Passwordinput from "@/app/Components/Passwordinput";
import Submitbutton from "@/app/Components/Submitbutton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { patientLogIn } from "@/Services/patientservices";

const Patientlogin = () => {
  const router = useRouter();
  const [details, setdetails] = useState({
    aadhar: "",
    aadharVerifier: false,
    password: "",
    passwordVerifier: false,
    disabled: false,
  });

  const handlePatientLogin = async (event) => {
    event.preventDefault();
    if (!details.aadharVerifier || !details.passwordVerifier) {
      toast.dismiss();
      toast.error("Invalid Details");
      return;
    }
    setdetails({
      ...details,
      disabled:true
    })
    try {
      const id = await patientLogIn(details);
      setdetails({
        aadhar: "",
        aadharVerifier: false,
        password: "",
        passwordVerifier: false,
        disabled: false,
      });
      toast.dismiss();
      router.push(`/Patient/${id._id}`);
    } catch (error) {
      setdetails({
        ...details,
        disabled:false
      });
      toast.dismiss();
      toast.error(error.response.data);
    }
  };
  
  return (
    <>
      <Toaster position="top-right" />
      <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={handlePatientLogin}
        id="form"
        name="form"
        disabled={details.disabled}
      >
        <Formheading heading="Patient Login Form" />
        <Aadharinput
          details={details}
          setdetails={setdetails}
        />
        <Passwordinput
          details={details}
          setdetails={setdetails}
          autoComplete="current-password"
        />
        <Submitbutton buttonname="Login" disabled={details.disabled}/>
      </form>
      <Belowformlinks
        redirectpage="/Patient/Patientsignin"
        text="Dont't have an account Click Here"
      />
    </>
  );
};

export default Patientlogin;
