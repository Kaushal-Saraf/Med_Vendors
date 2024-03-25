"use client"
import { useState } from "react";

const Addmedicine = ({ details, setdetails}) => {
  const [item, setitem] = useState({
    name: "",
    nooftimeinaday:3,
    noofcapsuleseachtimeinaday:1,
    direction:"After eating"
  });
  const addItem = () => {
    if (item.name === "") {
      toast.dismiss();
      toast.error("Medicine must have a name.");
      return;
    }
    const newmedicine = [...details.medicines, item];
    const set = new Set(newmedicine.name);
    if (set.size !== newmedicine.length) {
      toast.dismiss();
      toast.error(
        "Medicine already prescribed please enter another one if required."
      );
      return;
    }
    setitem("");
    setdetails({
      ...details,
      medicines: newmedicine,
    });
  };
  const removeItem = (item) => {
    setdetails({
      ...details,
      medicines: details.medicines.filter((i) => i !== item),
    });
  };
  return (
    <div className="text-center py-2">
      <div className="font-bold text-center my-2">Medicines</div>
      {details.medicines.map((item) => (
        <div className="my-2 px-4 w-full flex justify-between">
          <div
            className="text-left w-[150px] sm:w-[400px] overflow-scroll whitespace-nowrap mr-2"
            key={item}
          >
            {item}
          </div>
          <button
            className="bg-red-400 px-2 rounded-sm"
            onClick={() => removeItem(item)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="my-2 px-4 w-full flex justify-between">
        <div
          className="text-left w-[150px] sm:w-[400px] overflow-scroll whitespace-nowrap mr-2"
          key={item}
        >
          <input
            type="text"
            name="mdname"
            id="mdname"
            placeholder="Medicine Name"
            value={item.name}
            onChange={(e) => setitem({
              ...item,
              name: e.target.value,
            })}
            className="border-[0.5px] w-full px-2 border-black border-solid"
          />
        </div>
        <button
          className="bg-green-400 px-2 rounded-sm"
          onClick={() => addItem(item)}
        >
          Add Medicine
        </button>
      </div>
    </div>
  )
}

export default Addmedicine
