"use client"
import { useEffect, useState } from "react";
import { getDoctorDetails } from "@/Services/doctorservices";
import Docdocs from "@/app/Components/Docdocs";
import Nodocdocs from "@/app/Components/Nodocdocs";

const page = ({params}) => {
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
    };
    fetchData();
  }, []);
  
  return (
    <div>
      {details.supportingDocs? <Docdocs/> : <Nodocdocs/>}
    </div>
  )
}

export default page
