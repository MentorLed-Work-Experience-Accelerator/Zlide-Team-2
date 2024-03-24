import React from 'react'
import { inviteIcon, notificationIcon } from '../assets'

const DashboardNavbar = () => {
  return (
    <div className="flex items-center justify-between w-full gap-10 pb-6">
      <div className="flex items-center gap-6 w-[35%]">
        <div className="flex gap-4 items-center">
          <div className="h-12 w-12 rounded-full bg-primary text-white font-inter font-bold flex justify-center items-center text-xl">
            A
          </div>
          <span className="text-xl font-inter text-[#212121]">
            Ayomide Dosunmu
          </span>
        </div>
        <img src={notificationIcon} alt="" className="" />
      </div>

      <div className="flex border-b pb-6 w-[100%] justify-end">
        <div className="flex justify-end gap-4">
          <button className="md:py-3 py-2 px-6 text-primary bg-white hover:bg-black hover:outline-black outline outline-1 outline-primary rounded-md gap-2 flex items-center justify-center ">
            <img src={inviteIcon} alt="" className="" />
            Invite members
          </button>
          <button className="md:py-3 py-2 px-6 text-primary bg-[#DBEDFF] hover:bg-black hover:outline-black outline outline-1 outline-[#DBEDFF] rounded-md">
            Import
          </button>
          <button className="md:py-3 py-2 px-6 text-white bg-primary hover:bg-black hover:outline-black outline outline-1 outline-primary rounded-md">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar