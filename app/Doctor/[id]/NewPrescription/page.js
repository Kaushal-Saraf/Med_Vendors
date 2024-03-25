"use client";
import { findPatient } from "@/Services/doctorservices";
import currentdateandtime from "@/Utilites/currdateandtime";
import findage from "@/Utilites/findage";
import Newpresform from "@/app/Components/Newpresform";
import Updatepresform from "@/app/Components/Updatepresform";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const newprescription = ({ params }) => {
  const [patientAvailable, setpatientAvailable] = useState(false);
  const [details, setdetails] = useState({
    aadhar: "",
    aadharVerifier: false,
    date: "",
    doctorName: "",
    doctorContact: "",
    patientName: "",
    patientContact: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    bp: "",
    bg: "",
    title: "",
    desc: "",
    medicines: [],
    injections: [],
    tests: [],
    disabled: false,
  });

  const handlePatientDetails = async (e) => {
    e.preventDefault();
    if (!details.aadharVerifier) {
      toast.dismiss();
      toast.error("Aadhar number must of 12 digits.");
      return;
    }
    setdetails({
      ...details,
      disabled: true,
    });
    toast.dismiss();
    toast.loading("Preparing form...");
    try {
      const result = await findPatient(params.id, details);
      setdetails({
        ...details,
        date: currentdateandtime(),
        doctorName: result.docName,
        doctorContact: result.docContact,
        patientName: result.name,
        patientContact: result.contact,
        age: findage(result.dob),
        gender: result.gender,
        disabled: false,
      });
      setpatientAvailable(true);
      toast.dismiss();
      toast.success("Form Prepared Sucessfully.");
    } catch (e) {
      setdetails({
        ...details,
        disabled: false,
      });
      toast.dismiss();
      toast.error(e.response.data.message);
    }
  };
  return (
    <>
      <Toaster position="top-right" />
      {patientAvailable ? (
        <Updatepresform
          details={details}
          setdetials={setdetails}
          setpatientAvailable={setpatientAvailable}
        />
      ) : (
        <Newpresform
          formhandler={handlePatientDetails}
          details={details}
          setdetails={setdetails}
        />
      )}
    </>
  );
};
export default newprescription;
