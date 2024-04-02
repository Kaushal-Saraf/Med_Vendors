"use client";

import Findpatientform from "@/app/Components/Findpatientform";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { findPatient } from "@/Services/doctorservices";
import toast from "react-hot-toast";
import Belowformlinks from "@/app/Components/Formfields/Belowformlinks";

const findpatient = ({params}) => {
  const router = useRouter();
  const [details, setdetails] = useState({
    aadhar: "",
    aadharVerifier: false,
    details: false,
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
      const result = await findPatient(params.id,details);
      router.push(`/Doctor/${params.id}/NewPrescription/${result.patientid}`)
      toast.dismiss();
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
    <div>
      <Findpatientform
        details={details}
        setdetails={setdetails}
        formhandler={handlePatientDetails}
      />
     <Belowformlinks
        text="Back to Doctor's Home Page"
        redirectpage={`/Doctor/${params.id}`}
      />
    </div>
  );
};

export default findpatient;
