import React from 'react'

const ForgotPassword1 = () => {
  return (
    <div className='w-[480px] p-16 bg-white rounded-[40px] shadow-2xl z-40'>
      <div>
        <h1 className='font-semibold text-[28px] mb-6 text-dimBlack'>
          Forgot Password?
        </h1>
        <p className="text-dimBlack mb-6">
          Please enter your registered email address
        </p>
        <div className="flex flex-col gap-6">
          {/* Form */}
          <div className="flex flex-col gap-2">
            <label htmlFor='email' className='text-dimBlack' >Email</label>    
            <input 
              className='py-3 placeholder:text-sm text-sm w-full rounded-md bg-secondary text-dimmestBlack outline outline-1 outline-[#ABBED1] pl-4 focus:outline-[#ABBED1]'
              type="email" 
              name="email"
              id='email'
              // value={email} 
              // onChange={changeHandler}
              placeholder='Enter your Email' 
            />
          </div>
          {/* Button */}
          <button 
            className='py-3 text-sm w-full rounded-md bg-primary text-white flex items-center justify-center gap-4'
          >
            Send Reset Link
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword1