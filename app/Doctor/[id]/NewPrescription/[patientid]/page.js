"use client";
import { getPrescriptionDetails, savePrescription } from "@/Services/doctorservices";
import currentdateandtime from "@/Utilites/currdateandtime";
import findage from "@/Utilites/findage";
import Prescriptionform from "@/app/Components/Prescriptionform";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const prescriptionform = ({ params }) => {
  const router = useRouter();
  
  const [details, setdetails] = useState({
    aadhar: "",
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
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPrescriptionDetails(params.id, params.patientid);
      setdetails({
        ...details,
        aadhar: result.patient.aadharnumber,
        date: currentdateandtime(),
        doctorName: result.doctor.name,
        doctorContact: result.doctor.contact,
        patientName: result.patient.name,
        patientContact: result.patient.contact,
        age: findage(result.patient.dob),
        gender: result.patient.gender,
      });
    };
    fetchData();
  }, []);
  const addPrescription = async () => {
    if (details.title === "") {
      toast.dismiss();
      toast.error("Please enter Prescription Title");
      document.getElementById("title").focus();
      return;
    }
    setdetails({
      ...details,
      disabled: true,
    });
    toast.dismiss();
    toast.loading("Saving and Sending Prescription.");
    await savePrescription(params.id, params.patientid, details);
    setdetails({
      aadhar: "",
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
    router.push(`/Doctor/${params.id}`);
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
    setpatientAvailable(false);
    toast.dismiss();
    toast.success("Paitent Reset Sucessful!");
  };
  return (
    <div>
      <Prescriptionform
        details={details}
        setdetials={setdetails}
        buttonclick1={addPrescription}
        buttonclick2={clearForm}
        buttonclick3={resetPatient}
      />
    </div>
  );
};

export default prescriptionform;
