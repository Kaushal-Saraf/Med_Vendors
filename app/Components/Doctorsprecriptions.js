const Doctorsprecriptions = ({ prescriptions }) => {
  return (
    <div className="my-4">
      {prescriptions.map((item) => (
            <div
              className="w-[300px] flex flex-wrap justify-evenly border-solid border-2 border-black rounded my-4"
              key={item._id}
            >
              {item.title}
              <div className="w-full my-4 flex">
                <p className="w-[250px] mx-auto overflow-scroll">{item.description}</p>
              </div>
              <div className="w-[250px] my-4 mx-[25px] flex">
                <p className="w-[175.65px] text-left">Daily fequency:</p>
                <p className="overflow-scroll">{item._id}</p>
              </div>
              <div className="w-[250px] my-4 mx-[25px] flex">
                <p className="w-[175.65px] text-left">Dosage (ml):</p>
                <p className="overflow-scroll">{item._id}</p>
              </div>
              <div className="w-[250px] my-4 mx-[25px] flex">
                <p className="w-[175.65px] text-left">Time Period (days):</p>
                <p className="overflow-scroll">{item.timeperiod}</p>
              </div>
              <p className="w-[250px] mx-auto whitespace-nowrap overflow-scroll">
                {item.direction}
              </p>
              <button
                className="bg-white px-2 rounded-sm my-4"
              >
                View Details
              </button>
            </div>
          ))}
    </div>
  );
};

export default Doctorsprecriptions;
