"use client";
import { addMedicine, getMachineDetails } from "@/Services/machineservices";
import today from "@/Utilites/todayhtml";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const machineid = ({ params }) => {
  const [newmedicinedetails, setnewmedicinedetails] = useState({
    slot: '',
    medicinename: "",
    dosage: "",
    capsuleeachpack: "",
    expiry: "",
    price: "",
    quantity:"",
  });
  const [medicinedetails, setmedicinedetails] = useState([]);
  const [slots, setslots] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMachineDetails(params.id);
      setslots(result.noofslots);
      setmedicinedetails(result.medicinedetails);
    };
    fetchData();
  }, []);

  const addMedicineHandler = async (e) => {
    e.preventDefault();
    toast.dismiss();
    toast.loading("Updating medicines.");
    const result = await addMedicine(params.id, newmedicinedetails);
    setmedicinedetails(result.medicinedetails);
    toast.dismiss();
    toast.success(result.message);
  };
  return (
    <div>
      <div className="flex justify-center my-4">
        <form onSubmit={addMedicineHandler} className="flex-col w-[350px] justify-center align-middle bg-blue-400 rounded py-4">
        <label htmlFor="slot" className="ml-[80px] text-white font-bold">Slot Number</label>
          <input
            type="number"
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="slot"
            id="slot"
            placeholder="Slot Number"
            max={slots}
            min={1}
            onChange={(e)=> setnewmedicinedetails({
              ...newmedicinedetails,
              slot: e.target.value
            })}
            value={newmedicinedetails.slot}
            required
          />
          <label htmlFor="medicinename" className="ml-[80px] text-white font-bold">Medicine Name</label>
          <input
            type="text"
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="medicinename"
            id="medicinename"
            placeholder="Medicine Name"
            onChange={(e)=> setnewmedicinedetails({
              ...newmedicinedetails,
              medicinename: e.target.value
            })}
            value={newmedicinedetails.medicinename}
          />
          <label htmlFor="dosage" className="ml-[80px] text-white font-bold">Dosage(mg)</label>
          <input
            type="number"
            min={0}
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="dosage"
            id="dosage"
            placeholder="Dosage"
            onChange={(e)=> setnewmedicinedetails({
              ...newmedicinedetails,
              dosage: e.target.value
            })}
            value={newmedicinedetails.dosage}
          />
          <label htmlFor="capsuleeachpack" className="ml-[80px] mt-2 text-white font-bold">Capsules in one pack</label>
          <input
            type="number"
            min={1}
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="capsuleeachpack"
            id="capsuleeachpack"
            placeholder="Capsules per pack"
            onChange={(e)=> setnewmedicinedetails({
              ...newmedicinedetails,
              capsuleeachpack: e.target.value
            })}
            value={newmedicinedetails.capsuleeachpack}
          />
          <label htmlFor="expiry" className="ml-[80px] mt-2 text-white font-bold">Expiry</label>
          <input
            type="date"
            min={today()}
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="expiry"
            id="expiry"
            placeholder="Expiry"
            onChange={(e)=> setnewmedicinedetails({
              ...newmedicinedetails,
              expiry: e.target.value
            })}
            value={newmedicinedetails.expiry}
          />
          <label htmlFor="price" className="ml-[80px] mt-2 text-white font-bold">Price</label>
          <input
            type="number"
            min={1}
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="price"
            id="price"
            placeholder="Price"
            onChange={(e)=> setnewmedicinedetails({
              ...newmedicinedetails,
              price: e.target.value
            })}
            value={newmedicinedetails.price}
          />
          <label htmlFor="quantity" className="ml-[80px] mt-2 text-white font-bold">Quantity</label>
          <input
            type="number"
            min={1}
            className="m-2 px-2 w-[181.33px] mx-20 rounded"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            onChange={(e)=> setnewmedicinedetails({
              ...newmedicinedetails,
              quantity: e.target.value
            })}
            value={newmedicinedetails.quantity}
          />
          <div className="flex justify-center my-4">
            <button type="submit" className="text-center bg-white px-2 py-1 rounded text-blue-400">
              Add Medicines
            </button>
          </div>
        </form>
      </div>
      <h1 className="text-blue-500 text-lg font-bold text-center">Medicine Detials</h1>
      <hr className="border-blue-500" />
      {
        medicinedetails.length? null:<div className=" text-blue-400 font-bold px-2">No Medicine Available in machine</div>
      }
      {medicinedetails.map((medicine) => (
        <div key={medicine.slot} className="flex justify-evenly bg-white m-2">
          <h1>Slot {medicine.slot}</h1>
          <p>{medicine.name}</p>
        </div>
      ))}
    </div>
  );
};

export default machineid;
