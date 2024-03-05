import React from 'react'
import ProgressBar from "./ProgressBar"
import { Link, useNavigate } from "react-router-dom"

const OnboardingTwo = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className="">
        <ProgressBar />
      </div>
      <h1 className='text-center font-bold text-2xl m-5'>How many people will you <br /> be working with?</h1>
      <div className="mb-2 flex justify-center space-x-1 items-center">
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>JUST ME</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>2-10</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>11-25</button>
      </div>
      <div className="mb-10 flex justify-center space-x-1 items-center">
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>51-250</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>250-500</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>500+</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>I DON&apos;T KNOW</button>
      </div>
      <div className="flex justify-center text-center space-x-64">
      <button className='border border-primary rounded-[3px] py-[7px] px-12 text-[11px] text-primary hover:bg-blue-200 hover:text-black hover:border-none' onClick={() => navigate('/onboardingone')}>
          Back
        </button>
        <button className='border border-primary rounded-[3px] py-[7px] px-12 text-[11px] text-primary hover:bg-blue-200 hover:text-black hover:border-none' onClick={() => navigate('/onboardingthree')}>
          Next 
        </button>
      </div>
    </div>
  )
}

export default OnboardingTwo
