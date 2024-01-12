'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const page = ({params}) => {
  console.log(params.id);
  //   const {id}= params
  //   const [user,setuser] = useState([])
  //   const Call=async()=>{
  //       const response = await axios.get("https://jsonplaceholder.typicode.com/users/"+username)
  //       const data = (response.data)
  //       setuser(data)
  //   }
  //   useEffect(() => {
  //     Call()
  //   }, [])  
  return (
    <div>
      page
    </div>
  )
}

export default page
