// import React from 'react'
import { useNavigate  } from 'react-router-dom'

const DownloadDialogueBox = () => {
    const navigate = useNavigate()
  return (
    <div className="fixed inset-0 justify-center items-center bg-[#717171] backdrop-blur-2xl z-50">
        <div className="mt-[120px] ml-[460px] w-[500px] p-20 top-52 bg-[rgb(58,58,58)] rounded-md">
            <div className="flex flex-col gap-2 space-y-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="text" className="text-white text-sm">Name of Presentation</label>
                    <input type="text" name="" id="" className="focus:outline-none bg-[#2b2b2b] rounded-md px-1 py-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="text" className="text-white text-sm">Format</label>
                    <select id="format" className="bg-[#2b2b2b] px-3 py-2 text-white rounded-md text-sm">
                      <option value="pdf" aria-placeholder="portable-document-format">pdf portable-document-format</option>
                      <option value="pptx">pptx</option>
                      <option value="ppt">ppt</option>
                    </select>
                </div>
                <div className="flex items-center space-x-[110px] text-white">
                    <button className="px-6 py-[6px] border border-primary rounded-md bg-white text-primary hover:bg-primary hover:text-white" onClick={() => navigate('/preview')}>Go back</button>
                    <button className="px-6 py-[6px] bg-primary hover:bg-white hover:text-primary hover:border-primary rounded-md">Download</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadDialogueBox
