"use client";
import { doctorLogIn } from "@/Services/doctorservices";
import Belowformlinks from "@/app/Components/Belowformlinks";
import Form from "@/app/Components/Form";
import Formheading from "@/app/Components/Formheading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const doctorlogin = () => {
  const router = useRouter();
  const [disabled, setdisabled] = useState(false);
  const [details, setdetails] = useState({
    contact: "",
    password: "",
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
      <Form
        onSubmit={handleDoctorLogin}
        disabled={disabled}
        label="Doctor Login form"
        buttonname="Login"
      >
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
            readOnly={disabled}
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
            id="password"
            name="password"
            autoComplete="current-password"
            onChange={(event) => {
              setdetails({
                ...details,
                password: event.target.value,
              });
            }}
            value={details.password}
            readOnly={disabled}
          ></input>
        </div>
      </Form>
      <Belowformlinks
        text="Don't have an account Click Here"
        redirectpage="/Doctor/Doctorsignin"
      />
    </>
  );
};

export default doctorlogin;
