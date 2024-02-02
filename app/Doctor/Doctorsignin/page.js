'use client'
import React, { useState } from 'react'

const page = () => {
  const [details, setdetails] = useState(
    {
      firstname:'',
      lastname:'',
      contact:'',
      password:'',
      supportingdocuments:'',
      checkbox:false
    }
  )
  const handleDetails=async(event)=>{
    event.preventDefault();
    if(details.firstname.includes(" ") || details.firstname===""){
      alert("Firstname cannot be empty or cannot have any spaces.")
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
    else if(details.supportingdocuments===""){
      alert("Please attach a supporting document that you are a doctor.")
      return
    }
    else if(!details.checkbox){
      alert("Please confirm that you are a doctor.")
      return
    }
  }
  return (
    <div>
      <form onSubmit={handleDetails} className="w-[450px] h-[575px] bg-white my-8 mx-auto rounded-lg shadow-sm">
        <h1 className="text-center bg-blue-300 h-8 text-white py-0.5 font-bold rounded-t-lg shadow-sm">
          Doctor Signin Form
        </h1>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            First Name
          </p>
          <input
            type="text"
            placeholder="raju"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name='firstname'
            id='firstname'
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
            placeholder="raju"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name='lastname'
            id='lastname'
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
            type="number"
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
          <p className="flex-1 text-center text-blue-400 font-semibold">
            Password
          </p>
          <input
            type="password"
            placeholder="*****"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name='password'
            id='password'
            onChange={(event)=>{
              setdetails({
                ...details,
                password:event.target.value
              })
            }}
            value={details.password}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <p className="flex-1 text-center text-blue-400 font-semibold">
            Supporting Documents
          </p>
          <input
            type="file"
            name="documents"
            accept='application/pdf'
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id='documents'
            onChange={(event)=>{
              setdetails({
                ...details,
                supportingdocuments:event.target.files[0]
              })
            }}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full justify-center">
        <input
            type="checkbox"
            className="text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="consent"
            id="consent"
            onChange={(event)=>{
              setdetails({
                ...details,
                checkbox:event.target.checked
              })
            }}
            value={details.checkbox}
          ></input>
          <p className="text-center text-blue-400 text-sm">
          I am a cerified doctor.
          </p>
        </div>
        <div className="flex w-full justify-center mt-[40px]">
          <button type='submit' className="text-center bg-blue-400 px-2 py-1 rounded text-white">
            Signin
          </button>
        </div>
      </form>
    </div>
  );
}

export default page
