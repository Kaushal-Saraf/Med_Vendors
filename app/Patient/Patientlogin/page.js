'use client'
import { patientLogIn } from '@/Services/patientservices'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Patientlogin = () => {
  const router = useRouter();
  const [disabled,setdisabled] = useState(false);
  const [details, setdetails] = useState({
    aadharnumber:'',
    password:'' 
  })
  const handlePatientLogin = async(event)=>{
    event.preventDefault()
    if(details.aadharnumber.length!==12){
      toast.dismiss()
      toast.error("Please enter valid Aadhar Number")
      return
    }
    else if (details.password.length===0){
      toast.dismiss()
      toast.error("Please enter Password")
      return
    }
    setdisabled(true);
    try {
      const id = await patientLogIn(details);
      setdisabled(false)
      setdetails({
        aadharnumber:"",
        password:""
      })
      toast.dismiss()
      router.push(`/Patient/${id._id}`)
    } catch (error) {
      setdisabled(false)
      toast.dismiss()
      toast.error(error.response.data)
    }
  }
  return (
    <>
      <Toaster position="top-right" />
      <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={handlePatientLogin}
        disabled={disabled}
      >
        <h1 className="text-center bg-blue-300 text-white font-bold rounded-t-lg shadow-sm">
          Patient Login Form
        </h1>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="aadharnumber"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Aadhar Number
          </label>
          <input
            type="number"
            placeholder="999999999999"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            name="aadharnumber"
            id="aadharnumber"
            onChange={(event) => {
              setdetails({
                ...details,
                aadharnumber: event.target.value,
              });
            }}
            value={details.aadharnumber}
            readOnly={disabled}
          ></input>
        </div>
        <div className="flex my-12 px-2 w-full">
          <label
            htmlFor="password"
            className="flex-1 text-center text-blue-400 font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="*****"
            className="flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400"
            id="password"
            name="password"
            autoComplete='given-password'
            onChange={(event) => {
              setdetails({
                ...details,
                password: event.target.value,
              });
            }}
            value={details.password}
            readOnly={disabled}
          ></input>
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="text-center bg-blue-400 px-2 py-1 rounded text-white"
            disabled={disabled}
          >
            Login
          </button>
        </div>
      </form>
      <div className="flex justify-center px-2 mt-[-1.5rem] mb-12">
        <Link
          href="/Patient/Patientsignin"
          className="font-bold text-blue-400 bg-white px-1 rounded-md"
        >
          Dont't have an account Click Here
        </Link>
      </div>
    </>
  );
}

export default Patientlogin
