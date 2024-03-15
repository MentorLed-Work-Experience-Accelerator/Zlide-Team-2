// import React from 'react'
import { logo } from '../assets'
import { Search } from '../assets'
import { notificationbell } from '../assets'
import { useNavigate  } from 'react-router-dom'


const DashboardNavbar = () => {
    
    const navigate = useNavigate()

  return (
    <div>
      <div className='relative left-0 right-0 top-0 flex justify-around items-center px-[30px] pt-6 bg-white z-50 h-24'>
            <img src={logo} alt="" className="w-[100px] cursor-pointer" onClick={() => navigate('/onboarding')} />
            <div className="relative w-3/5 flex items-center">
                <img src={Search} alt="" className="relative left-10 cursor-pointer h-4 w-4" />
                <input type="search" name="searchbar" id="searchbar" className='border rounded-md border-primary py-3 placeholder:text-sm placeholder:relative placeholder:left-8 text-sm w-full bg-secondary text-dimmestBlack outline outline-1 outline-[#ABBED1] pl-4 focus:outline-[#ABBED1]' placeholder='Search slides by name, category or company'/>
            </div>
            <div className="flex justify-start items-center space-x-3">
                <div className="rounded-full bg-primary text-white cursor-pointer">
                    <p className='px-[15px] py-2'>A</p>
                </div>
                <p>Abiola Oluwaseun</p>
                <div className="">
                    <img src={notificationbell} alt="notificationbell" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardNavbar
