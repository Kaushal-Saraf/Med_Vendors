"use client"
import { addMedicine, getMachineDetails } from '@/Services/machineservices';
import React, { useEffect, useState } from 'react'

const machineid = ({params}) => {
  
  const [medicinedetails, setmedicinedetails] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await getMachineDetails(params.id);
      console.log(result);
      setmedicinedetails(result.medicinedetails);
    };
    fetchData();
  }, []);

  const addMedicineHandler = async()=>{
    const updatedMedicine = await addMedicine({id:params.id, medicine:newMedicine})
  }
  return (
    <div>
      {medicinedetails.map((medicine)=>(
        <div key={medicine.Slot}>
          <h1>Slot {medicine.Slot}</h1>
          <input type></input>
        </div>
      ))}
    </div>
  )
}

export default machineid
