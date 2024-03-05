import React from 'react'
import ProgressBar from "./ProgressBar"
import { Link, useNavigate } from "react-router-dom"

const OnboardingFour = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className="">
        <ProgressBar />
      </div>
      <h1 className='text-center font-bold text-2xl m-10'>How did you hear <br /> about  Zlide?</h1>
      <div className="mb-2 flex justify-center space-x-1 items-center">
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>SEARCH ENGINE (GOOGLE, BING etc.)</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>LINKEDIN</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>BILLBOARD</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>TV/STREAMING</button>
      </div>
      <div className="mb-2 flex justify-center space-x-1 items-center">
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>TIKTOK</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>FRIEND/COLLEAGUE</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>PODCAST/RADIO</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>YOUTUBE</button>
      </div>
      <div className="mb-10 flex justify-center space-x-1 items-center">
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>FACEBOOK/INSTAGRAM</button>
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-slate-400 hover:text-white hover:bg-primary'>OTHERS</button>        
      </div>
      <div className="flex justify-center text-center space-x-64">
      <button className='border border-primary rounded-[3px] py-[7px] px-12 text-[11px] text-primary hover:bg-blue-200 hover:text-black hover:border-none' onClick={() => navigate('/onboardingthree')}>
          Back
        </button>
        <button className='border border-primary rounded-[3px] py-[7px] px-12 text-[11px] text-primary hover:bg-blue-200 hover:text-black hover:border-none' onClick={() => navigate('/onboardingfive')}>
          Next
        </button>
      </div>
    </div>
  )
}

export default OnboardingFour
