"use client";
import { useEffect, useState } from "react";
import Medicinecard from "../Components/Showprescirption/Medicinecard";
import Testcard from "../Components/Showprescirption/Testcard";
import Injectioncard from "../Components/Showprescirption/Injectioncard";

const Viewprescription = () => {
  const [details, setdetails] = useState({
    aadhar: "",
    date: "",
    doctorName: "",
    doctorContact: "",
    patientName: "",
    patientContact: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    bp: "",
    bg: "",
    title: "",
    desc: "",
    medicines: [],
    injections: [],
    tests: [],
    advice: "",
  });
  useEffect(() => {
    const fetchData = () => {
      const result = sessionStorage.getItem("prescriptionDetails");
      const data = JSON.parse(result);
      setdetails({
        ...details,
        aadhar: data.item.aadharnumber,
        date: data.item.date,
        doctorName: data.item.doctorname,
        doctorContact: data.item.doctorcontact,
        patientName: data.item.patientname,
        patientContact: data.item.patientcontact,
        age: data.item.age,
        gender: data.item.gender,
        height: data.item.height,
        weight: data.item.weight,
        bp: data.item.bloodpressure,
        bg: data.item.bloodgroup,
        title: data.item.title,
        desc: data.item.description,
        medicines: data.item.medicines,
        injections: data.item.injections,
        tests: data.item.tests,
        advice: data.item.advice,
      });
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 py-4">
      <div className="bg-white py-4 rounded">
        <div className="w-full text-center font-bold my-4 text-2xl">
          Dr.{details.doctorName}
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="mx-4 whitespace-nowrap align-middle flex-col">
            <div className="my-2">Date & Time: {details.date}</div>
            <div className="my-2">
              Doctor's Contact: {details.doctorContact}
            </div>
            <div className="mb-2 mt-4 font-bold">
              Patient Preliminary Examination
            </div>
            <div className="my-2">
              Height (cm): {details.height ? details.height : "N/A"}
            </div>
            <div className="my-2">
              Weight (Kg): {details.weight ? details.weight : "N/A"}
            </div>
            <div className="my-2">
              Blood Group: {details.bg ? details.bg : "N/A"}
            </div>
            <div className="my-2">
              Blood Pressure: {details.bp ? details.bp : "N/A"}
            </div>
          </div>
          <div className="mx-4 align-middle flex-col">
            <div className="my-2 font-bold">Patient details</div>
            <div className="my-2">Aadhar: {details.aadhar}</div>
            <div className="my-2">Name: {details.patientName}</div>
            <div className="my-2">Contact: {details.patientContact}</div>
            <div className="my-2">Age: {details.age}</div>
            <div className="my-2">Gender: {details.gender}</div>
          </div>
        </div>
        <div className="text-center font-bold my-4">
          Post Checkup Examination
        </div>
        <div className="my-2 px-2 text-center font-bold w-full whitespace-nowrap overflow-scroll">
          {details.title}
        </div>
        <div className="my-2 text-center break-words px-2 w-full">
          {details.desc}
        </div>
        {details.medicines.length ? (
          <Medicinecard details={details} />
        ) : (
          <div className="my-2 text-center w-full font-bold">
            No Medicines Prescribed
          </div>
        )}
        {details.tests.length ? (
          <Testcard details={details} />
        ) : (
          <div className="my-2 text-center w-full font-bold">
            No Test Prescribed
          </div>
        )}
        {details.injections.length ? (
          <Injectioncard details={details} />
        ) : (
          <div className="my-2 text-center w-full font-bold">
            No Injections Prescribed
          </div>
        )}
        {details.advice ? (
          <div className="my-2 text-center break-words px-2 w-full">
            Advice: {details.advice}
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap justify-evenly my-6 text-center ">
        {/* <button className="bg-white px-2 py-1 mx-2 my-2 rounded" onClick={buttonclick1}>Save and Send</button>
      <button className="bg-white px-2 py-1 mx-2 my-2 rounded" onClick={buttonclick2}>Reset Form</button>
      <button className="bg-white px-2 py-1 mx-2 my-2 rounded" onClick={buttonclick3}>Reset Patient</button> */}
      </div>
    </div>
  );
};

export default Viewprescription;
