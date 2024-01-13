"use client"
import React, { useState } from 'react'

const page = () => {
  const [details,setdetails] =useState({
    aadharnumber:'',
    firstname:'',
    lastname:'',
    contact:'',
    otp:''
  })
  const handledPatientSignin=(event)=>{
    event.preventDefault();
    console.log(details)
  }
  return (
    <>
      <form className="w-[450px] h-[500px] bg-white my-8 mx-auto rounded-lg shadow-sm" onSubmit={handledPatientSignin}>
        <h1 className="text-center bg-blue-300 h-8 text-white py-0.5 font-bold rounded-t-lg shadow-sm">
          Patient Signin Form
        </h1>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            Aadhar Number
          </p>
          <input
            type="text"
            placeholder="11"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="aadharnumber"
            name="aadharnumber"
            onChange={(event)=>{
              setdetails({
                ...details,
                aadharnumber:event.target.value
              })
            }}
            value={details.aadharnumber}
          />
        </div>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            First Name
          </p>
          <input
            type="text"
            placeholder="11"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id='firstname'
            name='firstname'
            onChange={(event)=>{
              setdetails({
                ...details,
                firstname:event.target.value
              })
            }}
            value={details.firstname}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            Last Name
          </p>
          <input
            type="text"
            placeholder="Raju Verma"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id='lastname'
            name='lastname'
            onChange={(event)=>{
              setdetails({
                ...details,
                lastname:event.target.value
              })
            }}
            value={details.lastname}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            Contact
          </p>
          <input
            type="text"
            placeholder="9999999999"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name='contact'
            id='contact'
            onChange={(event)=>{
              setdetails({
                ...details,
                contact:event.target.value
              })
            }}
            value={details.contact}
          ></input>
        </div>

        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">OTP</p>
          <input
            type="text"
            placeholder="*****"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id='otp'
            name='otp'
            onChange={(event)=>{
              setdetails({
                ...details,
                otp:event.target.value
              })
            }}
            value={details.otp}
          ></input>
        </div>
        <div className="flex w-full justify-center my-[60px]">
          <button className="text-center bg-blue-400 px-2 py-1 rounded text-white">
            Signin
          </button>
        </div>
      </form>
    </>
  );
}

export default page
