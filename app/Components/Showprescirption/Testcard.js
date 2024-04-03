const Testcard = ({details}) => {
  return (
    <div className="text-center flex flex-wrap justify-evenly">
        {details.tests.map((item) => (
        <div className="my-2 px-4 w-full flex justify-between">
          <div
            className="text-left w-[150px] sm:w-[400px] overflow-scroll whitespace-nowrap mr-2"
            key={item}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Testcard
