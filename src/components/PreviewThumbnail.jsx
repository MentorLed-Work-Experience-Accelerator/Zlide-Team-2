// import React from 'react'
import { slide } from "../assets"
import { slide1 } from "../assets"
import { slide2 } from "../assets"
import { slide3 } from "../assets"
import { slide4 } from "../assets"

const PreviewThumbnail = () => {
  return (
    <div className='relative block w-48 text-sm mt-10 pl-4 left-0 right-0 ml-10 space-y-8'>      
        <div className="bg-white rounded-md hover:rounded-md">
            <img src={slide} alt="slide deck template" className="h-[100px] hover:border-[2px] hover:border-slate-200 cursor-pointer" width={180} height={200} />
        </div>              
        <div className="bg-white rounded-md hover:rounded-md">
            <img src={slide1} alt="slide deck template" className="h-[100px] hover:border-[2px] hover:border-slate-200 cursor-pointer" width={180} height={200} />
        </div>       
        <div className="bg-white rounded-md hover:rounded-md">
            <img src={slide2} alt="slide deck template" className="h-[100px] hover:border-[2px] hover:border-slate-200 cursor-pointer" width={180} height={200} />
        </div>
        <div className="bg-white rounded-md hover:rounded-md">
            <img src={slide3} alt="slide deck template" className="h-[100px] hover:border-[2px] hover:border-slate-200 cursor-pointer" width={180} height={200} />
        </div>
        <div className="bg-white rounded-md hover:rounded-md">
            <img src={slide4} alt="slide deck template" className="h-[100px] hover:border-[2px] hover:border-slate-200 cursor-pointer" width={180} height={200} />
        </div>       
    </div>
  )
}

export default PreviewThumbnail
