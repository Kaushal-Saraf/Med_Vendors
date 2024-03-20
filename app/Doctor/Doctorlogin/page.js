"use client";
import { doctorLogIn } from "@/Services/doctorservices";
import Belowformlinks from "@/app/Components/Belowformlinks";
import Contactinput from "@/app/Components/Contactinput";
import Formheading from "@/app/Components/Formheading";
import Passwordinput from "@/app/Components/Passwordinput";
import Submitbutton from "@/app/Components/Submitbutton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const doctorlogin = () => {
  const router = useRouter();
  const [details, setdetails] = useState({
    contact: "",
    contactVerifier: "",
    password: "",
    passwordVerifier: "",
    disabled: false,
  });
  const handleDoctorLogin = async (event) => {
    event.preventDefault();
    if (details.contact.length !== 10) {
      toast.dismiss();
      toast.error("Please enter valid Contact Number.");
      return;
    } else if (details.password.length === 0) {
      toast.dismiss();
      toast.error("Please enter Password.");
      return;
    }
    setdisabled(true);
    try {
      const id = await doctorLogIn(details);
      setdisabled(false);
      setdetails({
        contact: "",
        password: "",
      });
      toast.dismiss();
      router.push(`/Doctor/${id._id}`);
    } catch (error) {
      setdisabled(false);
      toast.dismiss();
      toast.error(error.response.data);
    }
  };
  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleDoctorLogin}
        disabled={details.disabled}
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
      >
        <Formheading heading="Doctor Login form" />
        <Contactinput
          details={details}
          setDetails={setdetails}
          disabled={details.disabled}
        />
        <Passwordinput
          details={details}
          setDetails={setdetails}
          disabled={details.disabled}
        />
        <Submitbutton buttonname="Login" disabled={details.sdisabled} />
      </form>
      <Belowformlinks
        text="Don't have an account Click Here"
        redirectpage="/Doctor/Doctorsignin"
      />
    </>
  );
};

export default doctorlogin;
