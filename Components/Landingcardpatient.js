"use client"
import Link from 'next/link';
import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
const Landingcardpatient = () => {
  return (
    <div>
      <div className='w-full h-40 bg-white flex rounded-[10px] my-10 justify-center text-center'>
      <IoPersonCircleOutline className=' h-40 mx-5 text-blue-100 flex-auto w-32'/>
      <div className='flex-auto w-64'>
      <ul className='text-blue-500 font-bold display my-4'>
        <li>
          Easy to handle prescriptions.
        </li>
        <li>
          Buying medicine will become easier.
        </li>
        <li>
            Privacy of patient's medical history.
        </li>
      </ul>
      </div>
      <div className=' flex-auto w-32'>
        <div className='my-6'>
        <Link href="/Patient/Patientsignin" className='bg-blue-300 text-white rounded text-center px-2 py-1'>Signin</Link>
        </div>
        <div className='my-6'>
        <Link href="/Patient/Patientlogin" className='bg-blue-300 text-white rounded text-center px-2 py-1'>Login</Link>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Landingcardpatient
