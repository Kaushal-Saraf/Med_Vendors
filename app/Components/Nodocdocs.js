"use client"
import { useState } from "react";
import Formheading from "./Formheading";
import Submitbutton from "./Submitbutton";
import toast, { Toaster } from "react-hot-toast";

const Nodocdocs = ({ details, setdetails}) => {
  const [nodocdocsdetails, setnodocdocsdetails] = useState({
    disabled : false,
  })
  
  "use Server"
  async function upload(formData) {
    setnodocdocsdetails({
      ...nodocdocsdetails,
      disabled:true
    })
    const file = formData.get('degree');
    if(file.size> 500*1024){
      toast.dismiss();
      toast.error("File must be less than 500 Kb.");
      setnodocdocsdetails({
        ...nodocdocsdetails,
        disabled:false,
      });
      return;
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    // await new Promise((resolve, reject) => {
    //   cloudinary.uploader.upload_stream({
    //     tags: ['nextjs-server-actions-upload-sneakers'],
    //     upload_preset: 'nextjs-server-actions-upload'
    //   }, function (error, result) {
    //     if (error) {
    //       reject(error);
    //       return;
    //     }
    //     resolve(result);
    //   })
    //   .end(buffer);
    // });
  }

  return (
    <div>
      <Toaster position="top-right"/>
      <h1 className="text-blue-500 my-10 text-bold text-4xl text-center">
        Please upload your doctor's degree to proceed further.
      </h1>
      <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        action={upload}
        id="form"
        name="form"
        disabled={nodocdocsdetails.disabled}
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
            disabled={nodocdocsdetails.disabled}
            required
          />
        </p>
        <Submitbutton buttonname="Upload" disabled={nodocdocsdetails.disabled}/>
      </form>
    </div>
  );
};

export default Nodocdocs;
