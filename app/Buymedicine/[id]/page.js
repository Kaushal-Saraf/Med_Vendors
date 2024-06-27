"use client";

import { buyMedicine, getMachineDetails } from "@/Services/patientservices";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const buymedicine = ({ params }) => {
  const router = useRouter();
  const [machines, setmachines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMachineDetails(params.id);
      setmachines(result);
    };
    fetchData();
  }, []);

  const viewMachineLocation = (item) => {
    router.replace(
      `https://www.google.com/search?q=${item.latitude}+${item.longitude}`
    );
  };
  const buymedicine = async (item) => {
    toast.dismiss();
    toast.loading("Checking availiblity and buying medicines");
    try {
      const result = await buyMedicine(params.id, item.umid);
      toast.dismiss();
      toast.success(result.message);
      router.push(`/Patient/${result.patient}/Qrs`);
    } catch (e) {
      toast.dismiss();
      toast.error(e.response.data.message);
    }
  };

  return (
    <div>
      <h2 className="text-center mt-6 font-bold text-lg text-white">
        Machines near me
      </h2>
      <hr className="border-blue-500" />
      {machines.map((item) => (
        <div
          className="text-center  bg-white rounded w-[300px] m-4"
          key={item.umid}
        >
          <h1 className="text-bold">Machine id: {item.umid}</h1>
          <p className="m-2 p-2">Address: {item.address.address}</p>
          {/* <div className="m-2">
            <button className="bg-blue-100 text-blue-400 rounded px-2">
              Check medicine availiblity
            </button>
          </div> */}
          <div className="m-2">
            <button
              onClick={() => {
                buymedicine(item);
              }}
              className="bg-blue-100 text-blue-400 rounded px-2"
            >
              Buy Medicine
            </button>
          </div>
          <div className="m-2">
            <button
              onClick={() => viewMachineLocation(item.address)}
              className="bg-blue-100 text-blue-400 rounded px-2 mb-4"
            >
              View machine Location.
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default buymedicine;
