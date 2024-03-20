'use client'
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link"
import { useEffect, useState } from "react";
import { httpAxios } from "@/helper/axioshelper";

const page = ({params}) => {
  const [data, setdata] = useState({
    "name": "",
    "contact":"",
    "supportingDocs":""
  }) 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDoctorDetails(params.id);
        settodos(result.todos);
        if (result.todos.length !== 0) {
          setavilableTodos(true);
        }
      } catch (error) {
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div>
      <h1 className="text-center font-bold text-blue-500 text-xl my-2">Hello Dr. {params.id}</h1>
      <div className="flex justify-between">
      <p className=" text-blue-500 text-md mx-2">Your Patients</p>
      <Link className="flex text-blue-500 text-md mx-2 hover:text-white"  href="/Doctor/NewPrescription"><IoMdAddCircleOutline className="mt-[0.35rem] mx-1"/>Add new Patient</Link>
      </div>
      <hr className="border-blue-500"/>
      <div>

      </div>
    </div>
  )
}
export default page
