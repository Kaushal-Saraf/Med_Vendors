"use client"

import { getPatientDetails } from "@/Services/patientservices";
import Patientprescriptions from "@/app/Components/Patientprescriptionscards";
import { useEffect, useState } from "react";

const patientid = ({params}) => {
  const [details, setdetails] = useState({
    name:"",
    prescriptions:[]
  })
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPatientDetails(params.id);
      setdetails({
        ...details,
        name: result.name,
        prescriptions: result.prescriptions
      });
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-center font-bold text-blue-500 text-xl my-2">
        Hello {details.name}
      </h1>
      <div>
        {details.prescriptions.length ? (
        <Patientprescriptions prescriptions={details.prescriptions}/>
        ) : (
          <div className="text-center text-4xl my-4 text-white font-bold ">
          No Prescriptions Avaliable.
        </div>
        )}
      </div>
    </>
  )
}

export default patientid
