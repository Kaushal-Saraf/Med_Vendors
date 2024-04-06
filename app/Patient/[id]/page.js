"use client";
import { getPatientDetails } from "@/Services/patientservices";
import Patientprescriptions from "@/app/Components/Patientprescriptionscards";
import { BsQrCode } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const patientid = ({ params }) => {
  const router = useRouter();
  const [details, setdetails] = useState({
    name: "",
    prescriptions: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPatientDetails(params.id);
      setdetails({
        ...details,
        name: result.name,
        prescriptions: result.prescriptions,
      });
    };
    fetchData();
  }, []);
  const viewPrescription =(item)=>{
    const sessionData = {
      "item":item,
      "backTo":"Patient Page",
      "link":`Patient/${params.id}`
    }
    sessionStorage.setItem("prescriptionDetails", JSON.stringify(sessionData));
    router.push("/ViewPrescription");
  }

  return (
    <>
      <h1 className="text-center font-bold text-blue-500 text-xl my-2">
        Hello {details.name}
      </h1>
      <div className="flex justify-between">
        <p className=" text-blue-500 text-md mx-2">Previous Prescriptions</p>
        <Link
          className="flex text-blue-500 text-md mx-2 hover:text-white"
          href={`/Patient/${params.id}/Qrs`}
        >
          <BsQrCode className="mt-[0.35rem] mx-1" />
          QR Codes
        </Link>
      </div>
      <hr className="border-blue-500" />
      <div>
        {details.prescriptions.length ? (
          <Patientprescriptions prescriptions={details.prescriptions} viewPrescription={viewPrescription}/>
        ) : (
          <div className="text-center text-4xl my-4 text-white font-bold ">
            No Prescriptions Avaliable.
          </div>
        )}
      </div>
    </>
  );
};

export default patientid;
