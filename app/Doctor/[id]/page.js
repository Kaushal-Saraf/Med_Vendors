"use client"
import { useEffect, useState } from "react";
import { getDoctorDetails } from "@/Services/doctorservices";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoMdAddCircleOutline } from "react-icons/io";;

const doctor = ({params}) => {
  const router = useRouter();
  const [details, setdetails] = useState({
    "name": "",
    "contact": "",
    "supportingDocs":false,
  }) 
  useEffect(() => {
    const fetchData = async () => {
        const result = await getDoctorDetails(params.id);
        setdetails({
          ...details,
          name:result.name,
          contact:result.contact,
          supportingDocs:result.supportingdocs
        });
        if(result.supportingdocs===false)router.push(`/Doctor/${params.id}/Uploaddegree`);
    };
    fetchData();
  }, []);
  
  return (
    <>
    <h1 className="text-center font-bold text-blue-500 text-xl my-2">Hello Dr. {details.name}</h1>
      <div className="flex justify-between">
      <p className=" text-blue-500 text-md mx-2">Your Patients</p>
      <Link className="flex text-blue-500 text-md mx-2 hover:text-white"  href = "/Doctor/${params.id}/NewPrescription" ><IoMdAddCircleOutline className="mt-[0.35rem] mx-1"/>Add New Patient</Link>
      </div>
      <hr className="border-blue-500"/>
      <div>
      </div>
    </>
  )
}

export default doctor
