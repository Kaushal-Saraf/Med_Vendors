"use client";
import { sendOTP } from "@/Services/doctorservices";
import Belowformlinks from "@/app/Components/Belowformlinks";
import Contactinput from "@/app/Components/Contactinput";
import Formheading from "@/app/Components/Formheading";
import Nameinput from "@/app/Components/Nameinput";
import Passwordinput from "@/app/Components/Passwordinput";
import Submitbutton from "@/app/Components/Submitbutton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const doctorsignin = () => {
  const router = useRouter();
  const [details, setdetails] = useState({
    name: "",
    nameVerifier: "",
    contact: "",
    contactVerifier:"",
    password: "",
    passwordVerifier:"",
    disabled:false
  });
  const handleDetails = async (event) => {
    event.preventDefault();
    if(!details.nameVerifier || !details.contactVerifier || !details.passwordVerifier){
      toast.dismiss();
      toast.error( "Please verify your details");
      return;
    }
    toast.dismiss()
    toast.loading("Sending OTP. Please wait...");
    setdetails({
      ...details,
      disabled: true,
    });
    try {
      const token = await sendOTP(details);
      sessionStorage.setItem("doctorOtp", token);
      toast.dismiss();
      setdetails({
        name: "",
        contact: "",
        password: "",
        disabled: false,
      });
      router.push("/Doctor/Doctorsignin/Verifyotp");
    } catch (error) {
      toast.dismiss();
      toast.error(error.response.data);
      setdetails({
        ...details,
        disabled: false,
      });
    }
  };
  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleDetails}
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        disabled={details.disabled}
      >
      <Formheading  heading="Doctor Signin Form"/>
      <Nameinput
          details={details}
          setdetails={setdetails}
          disabled={details.disabled}
        />
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
        <Submitbutton buttonname="Signin" disabled={details.disabled} />
      </form>
      <Belowformlinks
        text="Already have an account Click Here"
        redirectpage="/Doctor/Doctorlogin"
      />
    </>
  );
};

export default doctorsignin;
