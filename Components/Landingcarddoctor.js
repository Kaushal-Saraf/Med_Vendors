import Link from 'next/link';
import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
const Landingcarddoctor = () => {
  return (
    <div className='w-full h-40 bg-white flex rounded-[10px] my-10 justify-center text-center'>
      <FaUserDoctor className=' h-40 mx-5 text-blue-100 flex-auto w-32 py-4' />
      <div className='flex-auto w-64'>
      <ul className='text-blue-500 font-bold display my-4'>
        <li>
          Easy to maintain Patient history.
        </li>
        <li>
          Paperless priscription.
        </li>
        <li>
          Easily Understandable.
        </li>
      </ul>
      </div>
      <div className=' flex-auto w-32'>
        <div className='my-6'>
        <Link href="/Doctorsignin" className='bg-blue-300 text-white rounded text-center px-2 py-1'>Signin</Link>
        </div>
        <div className='my-6'>
        <Link href="/Doctorlogin" className='bg-blue-300 text-white rounded text-center px-2 py-1'>Login</Link>
        </div>
      </div>
      </div>
  )
}

export default Landingcarddoctor

