"use client";
import { getPatientQr } from "@/Services/patientservices";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const qrs = ({ params }) => {
  const [qr, setqr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPatientQr(params.id);
      setqr(result.qrg);
    };
    fetchData();
  }, []);
  return (
    <div>
      {qr ? (
        qr.map((qr) =>
          qr.used ? (
            <></>
          ) : (
            <div className="flex justify-center my-80" key={qr.uid}>
              <div>
                <QRCode value={qr.uid} />
                <p>Corresponding Machine id : {qr.umid}</p>
              </div>
            </div>
          )
        )
      ) : (
        <h1>NO QR available</h1>
      )}
    </div>
  );
};

export default qrs;
