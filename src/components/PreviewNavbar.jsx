// import React from 'react'
import { logo } from '../assets'
import { notificationbell } from '../assets'
import { useNavigate  } from 'react-router-dom'

const PreviewNavbar = () => {
    const navigate = useNavigate()
  return (
    <div>
       <div className='relative left-0 right-0 top-0 flex justify-around gap-[800px] items-center px-[30px] pt-6 bg-slate-200 z-50 h-24'>
            <img src={logo} alt="" className="w-[100px] cursor-pointer" onClick={() => navigate('/')} />
            
            <div className="flex justify-start items-center space-x-3 relative left-14">
                <div className="rounded-full bg-primary text-white cursor-pointer">
                    <p className='px-[15px] py-2'>A</p>
                </div>
                <p>Abiola Oluwaseun</p>
                <div className="cursor-pointer">
                    <img src={notificationbell} alt="notificationbell" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreviewNavbar




