"use client";
import { findPatient, savePrescription } from "@/Services/doctorservices";
import currentdateandtime from "@/Utilites/currdateandtime";
import findage from "@/Utilites/findage";
import Newpresform from "@/app/Components/Newpresform";
import Updatepresform from "@/app/Components/Updatepresform";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
const newprescription = ({ params }) => {
  const router = useRouter();
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
    advice: "",
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
  const addPrescription = async () => {
    if(details.title===""){
      toast.dismiss();
      toast.error( "Please enter Prescription Title" );
      document.getElementById('title').focus()
      return;
    }
    setdetails({
      ...details,
      disabled:true
    })
    toast.dismiss()
    toast.loading("Saving and Sending Prescription.")
    await savePrescription(details);
    setdetails({
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
      advice: "",
      disabled: false,
    })
    setpatientAvailable(false);
    router.push(`/Doctor/${params.id}`)
    toast.dismiss();
    toast.success("Paitent Saved Sucessfully");
  };
  const clearForm = async () => {
    setdetails({
      ...details,
      height: "",
      weight: "",
      bp: "",
      bg: "",
      title: "",
      desc: "",
      medicines: [],
      injections: [],
      tests: [],
      advice: "",
    });
    toast.dismiss();
    toast.success("Form  Cleared Successfully!");
  };
  const resetPatient = async () => {
    setdetails({
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
      advice: "",
      disabled: false,
    })
    setpatientAvailable(false);
    toast.dismiss();
    toast.success("Paitent Reset Sucessful!");
  };
  return (
    <>
      {patientAvailable ? (
        <Updatepresform
          details={details}
          setdetials={setdetails}
          buttonclick1={addPrescription}
          buttonclick2={clearForm}
          buttonclick3={resetPatient}
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
