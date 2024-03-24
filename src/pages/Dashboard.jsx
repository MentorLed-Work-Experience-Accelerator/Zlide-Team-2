import React from 'react'
import { createIcon, draftIcon, inviteIcon, notificationIcon, recentIcon, searchIcon, starIcon, uploadIcon, whitePlusIcon } from '../assets'
import { DashboardNavbar, Loading } from '../components'

const Dashboard = () => {
  return (
    <div className='bg-[#F5F5F5] h-[100vh] px-[80px] pt-4 font-inter'>
      <DashboardNavbar />
      <div className="w-full gap-10 flex justify-between">
        <div className="w-[35%] flex flex-col gap-6">
          <div className="w-full px-4 py-3 text-[#4D4D4D] bg-[#DBEDFF] outline outline-1 outline-primary rounded-md flex items-center gap-3">
            <img src={searchIcon} alt="" className="" />
            <input type="text" className="text-[#4D4D4D] placeholder:text-[#4D4D4D] bg-[#DBEDFF] outline-none" placeholder='Search boards' />  
          </div>
          <div className="flex flex-col gap-6">
            <div className="pb-6 border-b w-full flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6">
                  <img src={recentIcon} alt="" className="" />
                </div>
                <p className="">Recent boards</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6">
                  <img src={starIcon} alt="" className="" />
                </div>
                <p className="">Starred boards</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6">
                  <img src={draftIcon} alt="" className="" />
                </div>
                <p className="">Drafts</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="pb-6 border-b w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2 ">
                  <p className="italic font-bold">
                    Projects
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6">
                      <img src={createIcon} alt="" className="" />
                    </div>
                    <p className="">
                      Create New Project
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-6 border-b w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2 ">
                  <p className="italic font-bold">
                    Teams
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6">
                      <img src={createIcon} alt="" className="" />
                    </div>
                    <p className="">
                      Create New Team
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-6 border-b w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2 ">
                  <p className="italic font-bold">
                    Upload
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6">
                      <img src={uploadIcon} alt="" className="" />
                    </div>
                    <p className="">
                      Upload From Backup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <p className="text-xl font-bold">
            Create a board
          </p>
          <p className="mt-4 mb-2">
            Recommended templates
          </p>
          <div className="flex flex-col items-center justify-center bg-[#0671E0] rounded-lg h-[100px] w-[180px]">
            <img src={whitePlusIcon} alt="" className="" />
          </div>
        </div>
      </div>
      <Loading />
    </div>
  )
}

export default Dashboard