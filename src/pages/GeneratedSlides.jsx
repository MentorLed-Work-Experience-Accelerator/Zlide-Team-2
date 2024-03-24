import React from 'react'
import { image1, image2, image3, image4, image5 } from '../assets'

const GeneratedSlides = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center bg-[#D7D7D7] w-full'>
      <div className="w-[90%] mb-10">
        <h1 className="text-xl text-primary font-semibold ">
          Here’s your presentation.
        </h1>
        <p className="text-[#717171]">
          We hope it’s to your taste.
        </p>
      </div>
      <div className="flex justify-between gap-6 items-center bg-[#22222270] h-[400px] w-[90%] rounded-3xl p-10">
        <div className="w-1/2">
          <img src={image1} alt="" className="" />
        </div>
        <div className="grid grid-cols-2 gap-6 w-1/2">
          <img src={image2} alt="" className="" />
          <img src={image3} alt="" className="" />
          <img src={image4} alt="" className="" />
          <img src={image5} alt="" className="" />

        </div>
      </div> 
      <div className="w-[90%] mt-10 flex justify-end gap-6">
        <button className="md:py-3 py-2 px-6 text-primary bg-transparent">
          Back To Dashboard
        </button>
        <button className="md:py-3 py-2 px-6 text-primary bg-white hover:bg-black hover:outline-black outline outline-1 outline-primary rounded-md gap-2 flex items-center justify-center ">
          Preview
        </button>
        <button className="md:py-3 py-2 px-6 text-white bg-primary hover:bg-black hover:outline-black outline outline-1 outline-primary rounded-md">
          Download
        </button>
      </div>  
    </div>
  )
}

export default GeneratedSlides