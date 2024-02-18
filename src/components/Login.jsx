import React, { useState } from 'react'
import { googleIcon, hideIcon } from '../assets'
import { Link } from 'react-router-dom';

const Login = () => {

    // const [data, setData] = useState({
    //     email:"",
    //     password:"",
    //     // isRemembered: false, initial state for the checkbox field
    // })

    // const { email, password } = data;

    // const changeHandler = evt => {
    //     setData({...data,[evt.target.name]:[evt.target.value]});
    // }

    // const submitHandler = evt => {
    //     evt.preventDefault();
    //     console.log(data);
    // }

  return (

    // <div className='h-screen flex'>
    //     <form onSubmit={submitHandler} className="w-full max-w-md m-auto bg-white border border-gray-200 drop-shadow-xl  py-10 px-16 rounded-3xl">  
    //         <div>
    //             <p className='font-bold text-2xl'>Sign into your Zlide account</p> <br />
    //             <button className='py-3 px-[90px] border border-solid rounded-md text-sm bg-blue-100'>Continue with Google</button>
    //         </div>
    //         <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-slate-500 after:flex-1 after:border-t after:border-slate-500">
    //             <p className='mx-4 mb-0 text-center font-semibold text-slate-500'>or</p>
    //         </div>
    //         <p className='text-black text-md text-left mb-1'>Sign in with email</p>
    //         <div className="font-semibold text-sm text-slate-500 text-left md:text-left">
    //             New to Zlide?{" "}
    //             <a 
    //                 className='text-blue-800 hover:underline hover:underline-offset-4 hover:text-green-600'
    //                 href="#">Sign up</a>
    //         </div>
            
    //         <br />
    //         <div className='pb-2 text-left'>
    //             <label >Email</label>
    //         </div>
    //         <input 
    //             className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
    //             type="email" 
    //             name="email"
    //             value={email} 
    //             onChange={changeHandler}
    //             placeholder='Enter your email address' 
    //         />
    //         <br />
    //         <br />
    //         <div className='pb-2 text-left'>
    //             <label className='top-2'>Password</label>
    //         </div>
    //         <input
    //             className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded' 
    //             type="password" 
    //             name="password"
    //             value={password}
    //             onChange={changeHandler} 
    //             placeholder='Enter your password'
    //         />
    //         <div className="mt-4 flex justify-between gap-2 font-semibold text-sm">
    //             <label className='flex text-slate-500 hover:text-slate-700 cursor-pointer'>
    //                 <input
    //                     className='mr-1' 
    //                     type="checkbox" 
    //                     name="checkbox"                      
    //                     />
    //                 <span>Remember me</span>
    //             </label>
    //             <a
    //                 className='text-blue-700 hover:underline hover:underline-offset-4'
    //                 href="#">
    //                     Forgot password?
    //             </a>
    //         </div>
    //         <div className="">
    //             <button 
    //                 className='mt-4 bg-blue-700 hover:bg-blue-500 hover:text-slate-900 hover:font-semibold px-[137px] py-2 text-white rounded text-sm'
    //                 type="submit"
    //                 >
    //                     <Link to='/'>Sign In</Link>
    //             </button>
    //         </div>
    //     </form>         
    // </div>

    <div className='w-[500px] py-10 px-16 bg-white rounded-[40px] shadow-2xl z-40'>
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
              <span className="text-xs text-primary text-right">
                Forgot Password?
              </span>
            </div>
            {/* Button */}
            <button 
              className='py-3 text-sm w-full rounded-md bg-primary text-white flex items-center justify-center gap-4'
            >
              Sign In
            </button>
          </div>
      </div>
    </div>
  )
}

export default Login