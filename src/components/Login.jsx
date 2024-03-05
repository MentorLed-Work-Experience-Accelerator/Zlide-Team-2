import React, { useState } from 'react'
import { googleIcon, hideIcon } from '../assets'
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin, setCurrent }) => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    // Add login logic here
    if (email && password) {
      onLogin({ email, password });
      navigate('/')
    } else {
      alert("Please fill in all fields");
    }

  };

  return (

    <div className='w-[500px] py-10 px-16 bg-white rounded-[40px] shadow-2xl z-40 mt-36'>
      <div>
          <h1 className='font-semibold text-[28px] mb-2 text-dimBlack'>
            Sign in your Zlide account.
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
                Sign in with email.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-dimmerBlack">
                  New to Zlide?
                </span>
                <Link 
                  to="/sign-up"
                  className='text-primary hover:underline hover:underline-offset-4'
                >
                  Sign Up.
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your Email' 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor='password' className='text-dimBlack' >Password</label> 
              <div className="relative w-full flex items-center">
                <input 
                  className='py-3 placeholder:text-sm text-sm w-full rounded-md bg-secondary text-dimmestBlack outline outline-1 outline-[#ABBED1] pl-4 focus:outline-[#ABBED1]'
                  type={showPassword ? 'text' : 'password'} 
                  name="password"
                  id='password'
                  // value={email} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter a Password' 
                />
                <img src={hideIcon} alt="" className="absolute right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
              </div>   
              <span className="text-xs text-primary text-right cursor-pointer" onClick={() => {
                setCurrent(1)
              }}>
                Forgot Password?
              </span>
            </div>
            {/* Button */}
            <button 
              className='py-3 text-sm w-full rounded-md bg-primary text-white flex items-center justify-center gap-4'
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
      </div>
    </div>
  )
}

export default Login