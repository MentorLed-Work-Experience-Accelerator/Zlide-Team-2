// import React from 'react'
import { slide } from "../assets"
import { useNavigate } from "react-router-dom"

const PreviewSlide = () => {
    const navigate = useNavigate()
  return (
    <div className='mt-10 ml-10 w-4/5 mb-8'>
        <div className="rounded-md">
            <img src={slide} alt="" className="w-[1050px]" />
        </div>
        <div className="space-x-2 gap-[358px] mt-12 text-sm flex items-center">
            <div className="space-x-2">
                <button className="bg-white py-1 px-4 rounded-[4px] hover:bg-primary hover:text-white border-[1px] border-primary text-primary" onClick={() => navigate('#')}>
                &lt;&lt; Start
                </button>
                <button className="bg-primary py-1 px-4 rounded-[4px] hover:text-primary hover:bg-white hover:outline-primary outline outline-1 outline-primary text-white" onClick={() => navigate('#')}>
                &lt; Previous
                </button>
                <button className="bg-primary py-1 px-7 rounded-[4px] hover:text-primary hover:bg-white hover:outline-white outline outline-1 outline-primary text-white" onClick={() => navigate('#')}>
                  Next &gt;
                </button>
                <button className="bg-white py-1 px-4 rounded-[4px] hover:bg-primary hover:text-white border-[1px] border-primary text-primary" onClick={() => navigate('#')}>
                End &gt;&gt; 
                </button>
            </div>
            <div className="space-x-2">
                <button className="bg-white py-4 px-4 rounded-[4px] hover:outline-primary outline outline-1 outline-primary text-primary" onClick={() => navigate('/dashboardone')}>
                Back to Dashboard
                </button>
                <button className="bg-primary py-4 px-10 rounded-[4px]  hover:outline-primary outline outline-1 outline-primary hover:bg-white hover:text-primary text-white" onClick={() => navigate('/download')}>
                Download
                </button>
            </div>
        </div>
    </div>
  )
}

export default PreviewSlide
