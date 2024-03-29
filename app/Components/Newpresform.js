import Aadharinput from "@/app/Components/Aadharinput"
import Formheading from "@/app/Components/Formheading"
import Submitbutton from "@/app/Components/Submitbutton"

const Newpresform = ({formhandler, details, setdetails}) => {
  return (
    <form
        className="w-[350px] pb-6 bg-white my-8 mx-auto rounded-lg shadow-sm"
        onSubmit={formhandler}
        id="form"
        name="form"
        disabled={details.disabled}
    >
      <Formheading heading={"Enter Patient Aadhar Number"} />
      <Aadharinput details={details} setdetails={setdetails}  disabled={details.disabled}/>
      <Submitbutton buttonname="Find Patient" disabled={details.disabled}/>
    </form>
  )
}

export default Newpresform
