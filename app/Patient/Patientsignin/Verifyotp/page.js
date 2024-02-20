"use client"
import { patientSignIn } from '@/Services/patientservices'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
const Verifyotp = () => {
  const router= useRouter()
  const [otp, setotp] = useState("")
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(otp.length===6){
      toast.dismiss()
      toast.error("Otp must be 6 digits only.")
    }
    const token = sessionStorage.getItem("patientOtp");
    const details = { otp: otp , token: token };
    toast.dismiss()
    toast.loading("Signin...")
    try {
      await patientSignIn(details)
      sessionStorage.removeItem("patientOtp");
      router.push("/Patient/Patientlogin")
    } catch (error) {
      toast.dismiss();
      toast.error("Otp doesn't matchs.");
    }
  }
  return (
    <>
    <Toaster position='top-right'></Toaster>
    <form onSubmit={handleSubmit} className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm">
           <h1 className="text-center bg-blue-300 text-white font-bold rounded-t-lg shadow-sm">
             Otp Verification Form 
           </h1>
           <div className="flex my-12 px-2 w-full">
             <label htmlFor="otp" className="flex-1 text-center text-blue-400 font-semibold">
               OTP
             </label>
             <input
               type="number"
               id="otp"
               name="otp"
               placeholder="******"
               className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
               onChange={(e)=>{setotp(e.target.value)}}
               value={otp}
             ></input>
           </div>
           <div className="flex w-full justify-center">
             <button className="text-center bg-blue-400 px-2 py-1 rounded text-white">
               Signin
             </button>
           </div>
         </form>
       </>
  )
}

export default Verifyotp
