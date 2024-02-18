import React from 'react'
import { googleIcon, hideIcon } from '../assets'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='w-[480px] py-8 px-16 bg-white rounded-[40px] shadow-2xl z-40'>
      <div>
          <h1 className='font-semibold text-[28px] mb-2 text-dimBlack'>
            Sign up for Zlide. It’s free.
          </h1> 
          <button className='py-3 text-sm w-full rounded-md bg-secondary text-primary flex items-center justify-center gap-4'>
            <img src={googleIcon} alt="" className="h-6 w-6" />
            Continue with Google
          </button>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-[#ABBED1] after:flex-1 after:border-t after:border-[#ABBED1]">
            <p className='mx-4 text-center text-dimmerBlack'>
              or
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <p className='text-dimBlack mb-2'>
                Sign up with email.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-dimmerBlack">
                  Already have an account?
                </span>
                <Link 
                  to="/login"
                  className='text-primary hover:underline hover:underline-offset-4'
                >
                  Sign In.
                </Link>
              </div>
            </div>
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
            <div className="flex flex-col gap-2">
              <label htmlFor='password' className='text-dimBlack' >Password</label> 
              <div className="relative w-full flex items-center">
                <input 
                  className='py-3 placeholder:text-sm text-sm w-full rounded-md bg-secondary text-dimmestBlack outline outline-1 outline-[#ABBED1] pl-4 focus:outline-[#ABBED1]'
                  type="password" 
                  name="password"
                  id='password'
                  // value={email} 
                  // onChange={changeHandler}
                  placeholder='Enter a Password' 
                />
                <img src={hideIcon} alt="" className="absolute right-4 cursor-pointer" />
              </div>   
              <span className="text-xs text-primary">
                Password should have at least 8 characters, and at least 1 uppercase, lowercase, number and symbol characters.
              </span>
            </div>
            {/* Button */}
            <button 
              className='py-3 text-sm w-full rounded-md bg-primary text-white flex items-center justify-center gap-4'
            >
              Continue with email
            </button>
            <span className="text-xs text-dimmerBlack text-center">
              By submitting your information, you agree to Zlide's Terms of Service and Privacy Policy. You can opt out anytime.
            </span>
          </div>
      </div>
    </div>
  )
}

export default SignUp