const Doctorsprecriptions = ({ prescriptions }) => {
  const viewPrescription = async()=>{

  }
  return (
    <div className="my-4">
      {prescriptions.map((item) => (
            <div
              className=" mx-4 flex flex-wrap justify-evenly align-middle bg-blue-200 text-blue-700 rounded my-4"
              key={item._id}
            >
              <p className="text-center overflow-scroll my-2">{item.title}</p>
              <p className="text-center my-2 w-full px-2">{item.description}</p>
              <p className="my-2">{item.date}</p>
              <button
                className="bg-white px-2 rounded my-2"
                onClick={viewPrescription}
              >
                View Details
              </button>
            </div>
          ))}
    </div>
  );
};

export default Doctorsprecriptions;
