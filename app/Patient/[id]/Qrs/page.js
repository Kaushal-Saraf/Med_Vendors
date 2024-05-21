"use client";
import { getPatientQr } from "@/Services/patientservices";
import { useEffect, useState } from "react";

const qrs = ({ params }) => {
  const [qr, setqr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPatientQr(params.id);
      setqr(result.qr);
    };
    fetchData();
  }, []);
  return (
    <div>
      {qr ? (
        qr.map((qr) => (
          <div key={qr.uid}>
            <p>Corresponding Machine id : qr.umid</p>
          </div>
        ))
      ) : (
        <h1>NO QR available</h1>
      )}
    </div>
  );
};

export default qrs;
