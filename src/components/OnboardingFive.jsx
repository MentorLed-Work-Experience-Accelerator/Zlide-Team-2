import React from 'react'
import ProgressBar from './ProgressBar'
import { Link, useNavigate } from "react-router-dom"

const OnboardingFive = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className="">
        <ProgressBar />
      </div>
      <h1 className='text-center font-bold text-2xl m-10'>What would you like to use <br /> Zlide for?</h1>
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
      <div className="mb-2 flex justify-center space-x-1 items-center">
        <button className='border border-primary py-[8px] px-4 text-[13px] bg-white rounded-2xl text-primary hover:text-white hover:bg-primary'>FACEBOOK/INSTAGRAM</button>
        <button className='border-none bg-slate-100 py-[8px] px-4 text-[13px] rounded-2xl text-slate-500 hover:text-white hover:bg-primary'>OTHERS</button>
      </div>
      <div className="m-5 items-center justify-center grid space-y-4">
        <textarea className='relative left-0 bg-slate-200 border-none' name="" id="" cols="60" rows="4" placeholder='Please provide more information'></textarea>
      </div>
      <div className="items-center justify-center m-auto relative left-72">
        <button className='m-auto border bg-primary text-white rounded-2xl py-2 px-4 hover:border hover:border-primary text-xs hover:bg-white hover:text-black' onClick={() => navigate('/')}>Submit</button>
      </div>
      <div className="flex justify-center text-center space-x-64">
      <button className='border border-primary rounded-[3px] py-[7px] px-12 text-[11px] text-primary hover:bg-blue-200 hover:text-black hover:border-none' onClick={() => navigate('/onboardingfour')}>
          Back 
        </button>
        <button className='border border-primary rounded-[3px] py-[7px] px-12 text-[11px] text-primary hover:bg-blue-200 hover:text-black hover:border-none' onClick={() => navigate('/')}>
          Next 
        </button>
      </div>
    </div>
  )
}

export default OnboardingFive
