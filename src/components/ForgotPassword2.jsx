// import React from 'react'
import { hideIcon } from '../assets'

const ForgotPassword2 = ({setCurrent}) => {
  return (
    <div className='w-[480px] p-16 bg-white rounded-[40px] shadow-2xl z-40'>
      <div>
        <h1 className='font-semibold text-[28px] mb-6 text-dimBlack'>
          Forgot Password?
        </h1>
        <p className="text-dimBlack mb-6">
          Enter new password
        </p>
        <div className="flex flex-col gap-6">
          {/* Form */}
          <div className="flex flex-col gap-2">
            <label htmlFor='newPassword1' className='text-dimBlack' >New Password</label> 
            <div className="relative w-full flex items-center">
              <input 
                className='py-3 placeholder:text-sm text-sm w-full rounded-md bg-secondary text-dimmestBlack outline outline-1 outline-[#ABBED1] pl-4 focus:outline-[#ABBED1]'
                type="password" 
                name="password"
                id='newPassword1'
                // value={email} 
                // onChange={changeHandler}
                placeholder='Enter a Password' 
              />
              <img src={hideIcon} alt="" className="absolute right-4 cursor-pointer" />
            </div>   
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor='newPassword2' className='text-dimBlack' >Confirm New Password</label> 
            <div className="relative w-full flex items-center">
              <input 
                className='py-3 placeholder:text-sm text-sm w-full rounded-md bg-secondary text-dimmestBlack outline outline-1 outline-[#ABBED1] pl-4 focus:outline-[#ABBED1]'
                type="password" 
                name="password"
                id='newPassword2'
                // value={email} 
                // onChange={changeHandler}
                placeholder='Enter a Password' 
              />
              <img src={hideIcon} alt="" className="absolute right-4 cursor-pointer" />
            </div>   
          </div>
          {/* Button */}
          <button 
            className='py-3 text-sm w-full rounded-md bg-primary text-white flex items-center justify-center gap-4'
            onClick={() => {
              setCurrent(0)
            }}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword2