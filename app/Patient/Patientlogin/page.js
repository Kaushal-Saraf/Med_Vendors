'use client'
import { patientLogIn } from '@/Services/patientservices'
import React, { useState } from 'react'

const Patientlogin = () => {
  const [details, setdetails] = useState({
    aadharnumber:'',
    password:'' 
  })
  const handlePatientLogin = async(event)=>{
    event.preventDefault()
    if(details.aadharnumber.length!==12){
      alert("Please enter correct Aadhar Number")
      return
    }
    else if (details.password.length===0){
      alert("Please enter Password")
      return
    }
    try {
      await patientLogIn(details);
      setdetails({
        aadharnumber:"",
        password:""
      })
    } catch (error) {
      alert(error.response.data.error)
    }
  }
  return (
    <>
      <form className="w-[450px] h-[300px] bg-white my-8 mx-auto rounded-lg shadow-sm" onSubmit={handlePatientLogin}>
        <h1 className="text-center bg-blue-300 h-8 text-white py-0.5 font-bold rounded-t-lg shadow-sm">
          Patient Login Form
        </h1>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            Aadhar Number
          </p>
          <input
            type="text"
            placeholder="9999999999"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="aadharnumber"
            id="aadharnumber"
            onChange={(event)=>{
            setdetails({
              ...details,
              aadharnumber:event.target.value
            })
          }}
            value={details.aadharnumber}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            Password
          </p>
          <input
            type="password"
            placeholder="*****"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="password"
            name="password"
            onChange={(event)=>{
              setdetails({
                ...details,
                password:event.target.value
              })
            }}
            value={details.password}
          ></input>
        </div>
        <div className="flex w-full justify-center my-[60px]">
          <button type='submit' className="text-center bg-blue-400 px-2 py-1 rounded text-white">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default Patientlogin
