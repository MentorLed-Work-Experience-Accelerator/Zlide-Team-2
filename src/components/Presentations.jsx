// import React from 'react'
import { slide } from "../assets"
import { gallery } from "../assets"

const Presentations = () => {
  return (
    <div className='mt-10 ml-10 w-4/5 mb-8'>
        <div className="space-y-2 mb-10">
            <p className="font-semibold text-[14px] mb-1">Create Presentation</p>
            <button className="bg-primary py-8 px-16 rounded-md text-white">
                +
            </button>
        </div>
        <div className="flex items-center space-x-[852px] mb-3">
            <p className="font-semibold text-[14px]">Recent Presentations</p>
            <p className="text-[12px] text-primary">View all</p>
        </div>
        <div className="space-y-8">
            <div className="flex items-center space-x-4">
                <button className="py-4 bg-gray-200 px-8 rounded-md text-white space-y-2 items-center">
                    <div className="bg-white rounded-[4px] p-0 m-0">
                        <img src={slide} alt="slide deck template" className="h-[100px]" width={180} height={200} />
                    </div>
                    <p className="text-black text-sm">Pitch deck</p>
                </button>
                <button className="py-4 bg-gray-200 px-8 rounded-md text-white space-y-2 items-center">
                    <div className="bg-white py-[40px] px-[80px] rounded-[4px]">
                        <img src={gallery} alt="" />
                    </div>
                    <p className="text-black text-sm">Team Onboarding</p>
                </button>
                <button className="py-4 bg-gray-200 px-8 rounded-md text-white space-y-2 items-center">
                    <div className="bg-white py-[40px] px-[80px] rounded-[4px]">
                        <img src={gallery} alt="" />
                    </div>
                    <p className="text-black text-sm">Performance Review</p>
                </button>
                <button className="py-4 bg-gray-200 px-8 rounded-md text-white space-y-2 items-center">
                    <div className="bg-white py-[40px] px-[80px] rounded-[4px]">
                        <img src={gallery} alt="" />
                    </div>
                    <p className="text-black text-sm">Product Brief</p>
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <button className="py-4 bg-gray-200 px-8 rounded-md text-white space-y-2 items-center">
                    <div className="bg-white py-[40px] px-[80px] rounded-[4px]">
                        <img src={gallery} alt="" />
                    </div>
                    <p className="text-black text-sm">Research Presentation</p>
                </button>
                <button className="py-4 bg-gray-200 px-8 rounded-md text-white space-y-2 items-center">
                    <div className="bg-white py-[40px] px-[80px] rounded-[4px]">
                        <img src={gallery} alt="" />
                    </div>
                    <p className="text-black text-sm">Sales Record</p>
                </button>
                <button className="py-4 bg-gray-200 px-8 rounded-md text-white space-y-2 items-center">
                    <div className="bg-white py-[40px] px-[80px] rounded-[4px]">
                        <img src={gallery} alt="" />
                    </div>
                    <p className="text-black text-sm">Vision Board</p>
                </button>
                <button className="py-4 bg-gray-200 px-8 rounded-md text-white space-y-2 items-center">
                    <div className="bg-white py-[40px] px-[80px] rounded-[4px]">
                        <img src={gallery} alt="" />
                    </div>
                    <p className="text-black text-sm">Top Executive Brief</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Presentations
