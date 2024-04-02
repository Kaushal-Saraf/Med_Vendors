"use client"
import Formheading from "@/app/Components/Formfields/Formheading";
import { useState } from "react";
import toast from "react-hot-toast";

const addmachine = () => {
    const [details, setdetails] = useState({
        umid:"",
        address:"",
        disabled:""
    })
    const handleMachines = (e) =>{
        e.preventDefault();
        if(details.umid==="" && details.address===""){
            toast.dismiss();
            toast.error("Please fill all fields");
            return
        }
        
    }
  return (
    <div>
       <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={handleMachines}
        id="form"
        name="form"
        disabled={details.disabled}
      >
        <Formheading heading="Add Machine Details"/>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="umid"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            UMID
          </label>
          <input
            readOnly={details.disabled}
            type="text"
            placeholder="Your unique id"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="umid"
            name="umid"
            onChange={(event) => {
              setdetails({
                ...details,
                umid: event.target.value,
              });
            }}
            value={details.umid}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="umid"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
           Machine Address
          </label>
          <input
            readOnly={details.disabled}
            type="address"
            placeholder="Machine Address"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="address"
            name="address"
            autoComplete="address"
            onChange={(event) => {
              setdetails({
                ...details,
                address: event.target.value,
              });
            }}
            value={details.address}
          ></input>
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="text-center bg-blue-400 px-2 py-1 rounded text-white"
            disabled={details.disabled}
          >
            Add Machine
          </button>
        </div>
      </form>
    </div>
  )
}

export default addmachine
