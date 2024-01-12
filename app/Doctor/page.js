'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const doctor = () => {
//   const [user,setuser] = useState([])
//   const Call=async()=>{
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users")
//       const data = (response.data)
//       setuser(data)
//   }
//   useEffect(() => {
//     Call()
//   }, [])
  
  return (
    <>
    {/* <div className='flex items-center justify-center'>
      <button onClick={Call} className='p-2 my-10 align-middle text-pink-100 bg-red-200 rounded'>Call the Api</button>
    </div>
    <div className='flex items-center justify-center w-full'>
        <ul>
        {user.map((e,i)=>{
          return <li key={i} className='mb-2 bg-blue-100 text-blue-500 '>{e.username}---<a href={`/Doctor/${e.username}`}>Explore</a></li>
        })}
        </ul>
      </div> */}
     <form>
      <h1></h1>
      
     </form>
    </>
  )
}

export default doctor
