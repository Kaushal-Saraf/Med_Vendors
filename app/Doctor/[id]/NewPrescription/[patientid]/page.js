"use client"
import Updatepresform from "@/app/Components/Updatepresform";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const newpresform = ({params}) => {

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPrescriptionDetails(params.id);
      setdetails({
        ...details,
        name: result.name,
        contact: result.contact,
        supportingDocs: result.supportingdocs,
      });
    };
    fetchData();
  }, []);
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
    <div>
      <Updatepresform
          details={details}
          setdetials={setdetails}
          buttonclick1={addPrescription}
          buttonclick2={clearForm}
          buttonclick3={resetPatient}
        />
    </div>
  )
}

export default newpresform
