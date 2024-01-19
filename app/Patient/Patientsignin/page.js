"use client"
import { patientSignIn } from '@/Services/patientservices'
import React, { useState } from 'react'

const page = () => {
  const [details,setdetails] =useState({
    aadharnumber:'',
    firstname:'',
    lastname:'',
    dob: '',
    gender:'Male',
    contact:'',
    password:''
  })
  const handledPatientSignin=async (event)=>{
    event.preventDefault();
    if (details.aadharnumber.length !== 12){
      alert("Please enter correct Aadhar number.")
      return 
    }
    else if(details.firstname.includes(" ") || details.firstname===""){
      alert("Firstname cannot be empty or cannot have any spaces.")
      return
    }
    else if(details.dob===""){
      alert("Dob cannot be empty.")
      return 
    }
    else if(details.contact.length!==10){
      alert("Please enter correct contact number.")
      return 
    }
    else if(details.password.length<8){
      alert("Password is too sort.")
      return
    }
    try{
      const result = await patientSignIn(details);
      setdetails({
        aadharnumber:'',
        firstname:'',
        lastname:'',
        dob: '',
        contact:'',
        gender:'Male',
        password:''
      })
    }
    catch(error){
      alert('Aadhar number already exists try to login.')
    }
  }
  return (
    <>
      <form
        className="w-[450px] h-[575px] bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={handledPatientSignin}
      >
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
            onChange={(event) => {
              setdetails({
                ...details,
                aadharnumber: event.target.value,
              });
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
            placeholder="Raju"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="firstname"
            name="firstname"
            onChange={(event) => {
              setdetails({
                ...details,
                firstname: event.target.value,
              });
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
            placeholder="Kumar Verma"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="lastname"
            name="lastname"
            onChange={(event) => {
              setdetails({
                ...details,
                lastname: event.target.value,
              });
            }}
            value={details.lastname}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">DOB</p>
          <input
            type="date"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="dob"
            name="dob"
            onChange={(event) => {
              setdetails({
                ...details,
                dob: event.target.value,
              })
            }}
            value={details.dob}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            Gender
          </p>
          <select
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="gender"
            id="gender"
            onChange={(event)=>{
            setdetails({
              ...details,
              gender:event.target.value
            })
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </select>
        </div>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            Contact
          </p>
          <input
            type="text"
            placeholder="9999999999"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="contact"
            id="contact"
            onChange={(event) => {
              setdetails({
                ...details,
                contact: event.target.value,
              });
            }}
            value={details.contact}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            Password
          </p>
          <input
            type="password"
            placeholder="*******"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="password"
            id="password"
            onChange={(event) => {
              setdetails({
                ...details,
                password: event.target.value,
              });
            }}
            value={details.password}
          ></input>
        </div>
        <div className="flex w-full justify-center my-[40px]">
          <button
            type="submit"
            className="text-center bg-blue-400 px-2 py-1 rounded text-white"
          >
            Signin
          </button>
        </div>
      </form>
    </>
  );
}

export default page
