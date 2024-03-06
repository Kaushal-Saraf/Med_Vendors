"use client";
import React, { useState } from "react";
const vendorsignin = () => {
  const [details, setdetails] = useState({
    name:"",
    nameVerifier:true,
    contact:"",
    contactVerifer:true,
    password:"",
    passwordVerifier:true
  })
  const handleSubmit=(e)=>{

  }
  return (
    <>
      <form onSubmit={handleSubmit} className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm">
        <h1 className="text-center bg-blue-300 text-white font-bold rounded-t-lg shadow-sm">
          Vendor Signin Form
        </h1>
        <div className="flex my-12 px-2 w-full">
          <label htmlFor="name" className="flex-1 text-center text-blue-400 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="given-name"
            placeholder="Raju Verma"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            onChange={(e)=>{
              let name= e.target.value;
              let flag= false;
              for(let i=0; i<name.length; i++){
                if(name[i]!=' ') flag=true;
              }
              if(!flag){
                setdetails({
                  ...details,
                  name:name,
                  nameVerifier:true
                })
              }
              else{
                setdetails({
                  ...details,
                  name:name,
                  nameVerifier:false
                })
              }
            }}
            value={details.name}
          ></input>
        </div>
        {details.nameVerifier? <div className="text-red-400 text-center mt-[-40px]">Please enter your name.</div> : null}
        <div className="flex my-12 px-2 w-full">
          <label htmlFor="contact" className="flex-1 text-center text-blue-400 font-semibold">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="9999999999"
            autoComplete="tel-national"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            onChange={(e)=>{
              let contact= e.target.value;
              if(contact.length===10){
                setdetails({
                  ...details,
                  contact:contact,
                  contactVerifer:false
                })
              }
              else{
                setdetails({
                  ...details,
                  contact:contact,
                  contactVerifer:true
                })
              }
            }}
            value={details.contact}
          ></input>
        </div>
        {details.contactVerifer? <div className="text-red-400 text-center mt-[-40px]">Contact must contain 10 digits only.</div> : null}
        <div className="flex my-12 px-2 w-full">
          <label htmlFor="password" className="flex-1 text-center text-blue-400 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*****"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            autoComplete="new-password"
            onChange={(e)=>{
              let password = e.target.value;
              if(password.length>=8){
                setdetails({
                  ...details,
                  password:password,
                  passwordVerifier:false
                })
              }
              else{
                setdetails({
                  ...details,
                  password:password,
                  passwordVerifier:true
                })
              }
            }}
            value={details.password}
          ></input>
        </div>
        {details.passwordVerifier? <div className="text-red-400 text-center mt-[-40px]">Password must be greater than 8 digits.</div> : null}
        <div className="flex w-full mt-10 justify-center">
          <button type="submit" className="text-center bg-blue-400 px-2 py-1 rounded text-white">
            Send OTP
          </button>
        </div>
      </form>
    </>
  );
};

export default vendorsignin;
