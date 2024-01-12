'use client'
import Landingcards from '@/Components/Landingcards';
import Openingline from '@/Components/Openingline';
import { images } from '@/next.config';
import axios from 'axios';
import React, { useState } from 'react'
const page = () => {
  // const[image,setimage] = useState([])
  // const getimage= async ()=>{
  //   try {
  //     const response = await axios.get("https://picsum.photos/v2/list")
  //     const data = response.data
  //     console.log(data)
  //     setimage(data)
  //   } catch (error) {
  //     console.error("no images")
  //   }
  // }
  return (
    // <div>
    //   <button onClick={getimage} className=' h-10 px-5 mx-5 my-5 bg-blue-500'>Get Image</button>
    //   <div className='p-10'>
    //     {image.map((elem,i)=>{
    //       return <img key={i} src={elem.download_url} width={300} height={300} className='my-10 mx-10 rounded inline-block'/>
    //     })}
    //   </div>
    // </div>
    <>
      <Openingline/>
      <Landingcards/>
    </>
  )
}

export default page
