const newprescription = () => {
  return (
    <>
      <form onSubmit="handleData()"className='w-[450px] h-[300px] bg-white my-8 mx-auto rounded-lg shadow-sm'>
      <h1 className='text-center bg-blue-300 h-8 text-white py-0.5 font-bold rounded-t-lg shadow-sm'>Prescription Form</h1>
      <div className='flex my-12 px-2 w-full'>
      <p className='flex-1 text-center text-blue-400 font-semibold'>Doctor Contact</p>
      <input type='text' placeholder='9999999999' className='flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400'></input>
      </div>
      <div className='flex my-12 px-2 w-full'>
      <p className='flex-1 text-center text-blue-400 font-semibold'>Aadhar Number</p>
      <input type='number' placeholder='999999999999' className='flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400'></input>
      </div>
      <div className='flex w-full justify-center my-[60px]'>
      <button type="submit"className='text-center bg-blue-400 px-2 py-1 rounded text-white'>Proceed</button>
      </div>
      </form>
    </>
  )
}

export default newprescription
