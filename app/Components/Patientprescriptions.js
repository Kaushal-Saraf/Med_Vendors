const Patientprescriptions = ({ prescriptions }) => {
  return (
    <div className="my-4 flex flex-wrap justify-evenly" >
      {prescriptions.map((item) => (
        <div className="w-[300px] bg-white rounded my-4" key={item._id}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Patientprescriptions;
