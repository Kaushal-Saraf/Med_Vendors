"use client"
import React from 'react'
import Landingcarddoctor from './Landingcarddoctor'
import Landingcardpatient from './Landingcardpatient'
import Landingcardvendor from './Landingcardvendor'
const Landingcards = () => {
  return (
    <div className='flex-column justify-between mx-10'>
    <Landingcarddoctor/>
    <Landingcardpatient/>
    <Landingcardvendor/>
    </div>
  )
}

export default Landingcards
