// import React from 'react'
import { image1, image2, image3, image4, image5 } from '../assets'
import { useNavigate } from "react-router-dom"

const GeneratedSlides = () => {
  const navigate = useNavigate()
  return (
    <div className="fixed flex flex-col inset-0 justify-center items-center bg-[#717171] backdrop-blur-2xl z-50">
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
        <button className="md:py-3 py-2 px-6 text-primary bg-transparent" onClick={() => navigate('/dashboardone')}>
          Back To Dashboard
        </button>
        <button className="md:py-3 py-2 px-6 text-primary bg-white hover:bg-black hover:outline-black outline outline-1 outline-primary rounded-md gap-2 flex items-center justify-center " onClick={() => navigate('/preview')}>
          Preview
        </button>
        <button className="md:py-3 py-2 px-6 text-white bg-primary hover:bg-black hover:outline-black outline outline-1 outline-primary rounded-md" onClick={() => navigate('/download')}>
          Download
        </button>
      </div>  
    </div>
  )
}

export default GeneratedSlides