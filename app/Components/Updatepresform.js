const Updatepresform = ({ details, setdetials, formhandler, setpatientAvailable }) => {
  return (
    <div className="px-8">
      <div className="bg-white">
        <div className="w-full text-center font-bold my-4 text-2xl">
          Dr.{details.doctorName}
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="mx-4 whitespace-nowrap align-middle flex-col">
            <div className="my-2">Date & Time: {details.date}</div>
            <div className="my-2">
              Doctor's Contact: {details.doctorContact}
            </div>
            <div className="my-2 font-bold">
              Patient Preliminary Examination
            </div>
            <div className="my-2">
              <label>
                Height (cm):
                <input
                  type="text"
                  id="height"
                  name="height"
                  className="mx-1 w-[100px] px-1 border-2 rounded-sm border-black border-solid"
                  onChange={(e) =>
                    setdetials({ ...details, height: e.target.value })
                  }
                  value={details.height}
                  disabled={details.disabled}
                />
              </label>
            </div>
            <div className="my-2">
              <label>
                Weight (Kg):
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  className="mx-1 w-[100px] px-1 border-2 rounded-sm border-black border-solid"
                  onChange={(e) =>
                    setdetials({ ...details, weight: e.target.value })
                  }
                  value={details.weight}
                  disabled={details.disabled}
                />
              </label>
            </div>
            <div className="my-2">
              <label>
                Blood Pressure:
                <input
                  type="text"
                  id="bp"
                  name="bp"
                  className="mx-1 w-[100px] px-1 border-2 rounded-sm border-black border-solid"
                  onChange={(e) =>
                    setdetials({ ...details, bp: e.target.value })
                  }
                  value={details.bp}
                  disabled={details.disabled}
                />
              </label>
            </div>
            <div className="my-2">
              <label>
                Blood Group:
                <input
                  type="text"
                  id="bg"
                  name="bg"
                  className="mx-1 w-[100px] px-1 border-2 rounded-sm border-black border-solid"
                  onChange={(e) =>
                    setdetials({ ...details, bg: e.target.value })
                  }
                  value={details.bg}
                  disabled={details.disabled}
                />
              </label>
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
      </div>
    </div>
  );
};

export default Updatepresform;
