"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const Addmedicine = ({ details, setdetails }) => {
  const [item, setitem] = useState({
    name: "",
    nooftimeinaday: 3,
    dosage: 1,
    timeperiod: 1,
    direction: "After eating",
  });
  const addItem = (e) => {
    e.preventDefault();
    const checkitem = (name) => {
      let flag = false;
      for (let i = 0; i < name.length; i++) {
        if (name[i] != " ") flag = true;
      }
      return flag;
    };
    if (!checkitem(item.name)) {
      toast.dismiss();
      toast.error("Medicine must have a name.");
      return;
    }
    const newmedicine = [...details.medicines, item];
    const newmednames = newmedicine.map((item) => item.name);
    const set = new Set(newmednames);
    if (set.size !== newmedicine.length) {
      toast.dismiss();
      toast.error(
        "Medicine already prescribed please enter another one if required."
      );
      return;
    }
    if (item.dosage === "") {
      toast.dismiss();
      toast.error("Number of capsules per time cannot be empty.");
      return;
    }
    if (item.nooftime === "") {
      toast.dismiss();
      toast.error("Daily fequency cannot be empty.");
      return;
    }
    setitem({
      name: "",
      nooftime: 3,
      dosage: 1,
      direction: "After eating",
    });
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
    <div>
      <div className="font-bold text-center mt-4">Medicines</div>
      <div className="text-center flex flex-wrap justify-evenly">
        {details.medicines.map((item) => (
          <div className="w-[300px] border-solid border-2 border-black rounded my-4" key={item.name}>
            <div className="w-full my-4 flex">
            <p
              className="w-[250px] mx-auto overflow-scroll"
            >{item.name}</p>
          </div>
          <div className="w-full my-4 flex">
            <p
              className="w-[175.65px] mx-2 overflow-scroll"
            >Daily fequency</p>
            <p
              className="w-[250px] overflow-scroll"
            >{item.nooftime}</p>
          </div>
              {item.dosage}
              {item.nooftime}
              {item.direction}
            <button
              className="bg-red-400 px-2 rounded-sm"
              onClick={() => removeItem(item)}
            >
              Remove
            </button>
          </div>
        ))}
        <form
          onSubmit={addItem}
          className="w-[300px] border-solid border-2 border-black rounded"
        >
          <input
            type="text"
            name="mdname"
            id="mdname"
            className="border-[0.5px] border-black px-1 border-solid w-[250px] mx-[25px] mt-4 rounded "
            placeholder="Medicine Name"
            value={item.name}
            onChange={(e) =>
              setitem({
                ...item,
                name: e.target.value,
              })
            }
          />
          <div className="w-full my-4 flex">
            <label
              htmlFor="nooftime"
              className="ml-[25px] w-[175.65px] mr-1 text-left"
            >
              Daily frequency:
            </label>
            <input
              type="number"
              name="nooftimes"
              id="nooftime"
              min="1"
              value={item.nooftime}
              onChange={(e) =>
                setitem({
                  ...item,
                  nooftime: e.target.value,
                })
              }
              className="w-[70px] px-1 rounded border-[0.5px] border-black border-solid"
            />
          </div>
          <div className="w-full my-4 flex">
            <label
              htmlFor="Dosage"
              className="ml-[25px] w-[175.65px] mr-1 text-left"
            >
              Dosage(mg):
            </label>
            <input
              type="number"
              name="Dosage"
              id="Dosage"
              min="1"
              value={item.dosage}
              onChange={(e) =>
                setitem({
                  ...item,
                  dosage: e.target.value,
                })
              }
              className="w-[70px] px-1 rounded border-[0.5px] border-black border-solid"
            />
          </div>
          <div className="w-full my-4 flex">
            <label
              htmlFor="timeperiod"
              className="ml-[25px] w-[175.65px] mr-1 text-left"
            >
              Time Period (Days):
            </label>
            <input
              type="number"
              name="timeperiod"
              id="timeperiod"
              min="1"
              value={item.timeperiod}
              onChange={(e) =>
                setitem({
                  ...item,
                  timeperiod: e.target.value,
                })
              }
              className="w-[70px] px-1 rounded border-[0.5px] border-black border-solid"
            />
          </div>
          <div className="w-full my-4 flex justify-center">
            <select
              type="text"
              name="instruction"
              id="instruction"
              min="1"
              value={item.direction}
              onChange={(e) =>
                setitem({
                  ...item,
                  direction: e.target.value,
                })
              }
              className="w-[150px] px-1 rounded border-[0.5px] border-black border-solid"
            >
              <option value="After eating">After eating</option>
              <option value="Before eating">Before eating</option>
            </select>
          </div>
          <button className="bg-green-400 px-2 rounded-sm mb-4" type="submit">
            Add Medicine
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addmedicine;
