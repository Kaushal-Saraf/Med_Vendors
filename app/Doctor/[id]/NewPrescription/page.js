"use client"
import Aadharinput from "@/app/Components/Aadharinput"
import Formheading from "@/app/Components/Formheading"
import Submitbutton from "@/app/Components/Submitbutton"
import { useState } from "react"
import toast from "react-hot-toast"

const newprescription = () => {
  const [details, setdetails] = useState({
    aadhar: "",
    aadharVerifier: false,
    patientAvailable: false,
    disabled:false
  })

  const handlePatientDetails=(e)=>{
    e.preventDefault();
    if(!details.aadharVerifier){
      toast.dismiss();
      toast.error("Aadhar number must of 12 digits.");
      return;
    }
    setdetails({
      ...details,
      disabled:true,
    })
    try{
      findPatient();
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <>
    <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={handlePatientDetails}
        id="form"
        name="form"
        disabled={details.disabled}
    >
      <Formheading heading={"Enter Patient Aadhar Number"} />
      <Aadharinput details={details} setdetails={setdetails}  disabled={details.disabled}/>
      <Submitbutton buttonname="Find Patient" disabled={details.disabled}/>
    </form>
    </>
  )
}
export default newprescription
