// import React from 'react'
import PreviewNavbar from "./PreviewNavbar"
import PreviewThumbnail from "./PreviewThumbnail"
import PreviewSlide from "./PreviewSlide"

const Preview = () => {
  return (
    <div className="bg-slate-200 h-full mb-auto">
        <div className="fixed top-0 z-50 w-full">
            <PreviewNavbar />
        </div>
        <div className="border border-solid w-full h-full">
            <div className="flex mt-20">
              <PreviewThumbnail />
            <div className="">
            <div className="w-[8px] h-screen items-center bg-slate-200 rounded-md ml-2 mt-10">
                <div className="h-[50px] w-full rounded-md bg-slate-400"></div>
            </div>
            </div>
              <PreviewSlide />
            </div>
        </div>
    </div>
  )
}

export default Preview

