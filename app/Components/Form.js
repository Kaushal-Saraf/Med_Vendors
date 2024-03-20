import Formheading from "./Formheading";

const Form = ({ handleSubmit, disabled, label, buttonname, children }) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        disabled={disabled}
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
      >
        <Formheading heading={label} />
        {children}
        <div className="flex w-full justify-center">
          <button
            type="submit"
            disabled={disabled}
            className="text-center bg-blue-400 px-2 py-1 rounded text-white"
          >
            {buttonname}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
