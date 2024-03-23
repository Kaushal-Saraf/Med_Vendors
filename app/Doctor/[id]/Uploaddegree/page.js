"use client";
import Submitbutton from "@/app/Components/Submitbutton";
import Formheading from "@/app/Components/Formheading";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { uploadDegree } from "@/Services/doctorservices";
import { useRouter } from "next/navigation";

const Uploaddegree = ({ params }) => {
  const router = useRouter();
  const [details, setdetails] = useState({
    file: null,
    disabled: false,
  });

  const upload = async(event) => {
    event.preventDefault();
    const file = details.file;
    if (file.size > 500 * 1024) {
      toast.dismiss();
      toast.error("File must be less than 500 Kb.");
      return;
    }
    toast.dismiss();
    toast.loading("Uploading...");
    await uploadDegree(params.id, details);
    toast.dismiss();
    router.push(`/Doctor/${params.id}`);
  };
  return (
    <div>
      <Toaster position="top-right" />
      <h1 className="text-blue-500 my-10 text-bold text-4xl text-center">
        Please upload your doctor's degree to proceed further.
      </h1>
      <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={upload}
        id="form"
        name="form"
      >
        <Formheading heading="Upload Doctor's Degree Certificate" />
        <p className="my-6 text-blue-600 px-2">
          <label htmlFor="degree" className="block font-semibold text-sm my-6">
            Select a Pdf file less than 500 Kb.
          </label>
          <input
            id="degree"
            className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            name="degree"
            accept=".pdf"
            onChange={(event) => {
              if (event.target.files.length !== 0) {
                setdetails({
                  ...details,
                  file: event.target.files[0],
                });
              } else {
                setdetails({
                  ...details,
                  file: null,
                });
              }
            }}
            required
          />
        </p>
        <Submitbutton buttonname="Upload" disabled={details.disabled} />
      </form>
    </div>
  );
};

export default Uploaddegree;
