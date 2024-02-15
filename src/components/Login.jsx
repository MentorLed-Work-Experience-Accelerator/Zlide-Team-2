import React from 'react'

const Login = () => {
  return (
    <section className='relative border border-solid mx-0 lg:w-1/2 lg:mx-auto bg-current rounded-lg flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 md:mx-0 md:my-0'>
        <div className="md:w-1/3 max-w-sm space-y-4 my-10">            
            <input 
                className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
                type="email" 
                name="email" 
                placeholder='Enter your email address' 
                />
            <input
                className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded' 
                type="password" 
                name="password" 
                placeholder='Enter your password'
            />
            <div className="mt-4 flex justify-between gap-2 font-semibold text-sm">
                <label className='flex text-slate-500 hover:text-slate-700 cursor-pointer'>
                    <input
                        className='mr-1' 
                        type="checkbox" 
                        name="checkbox"                      
                    />
                    <span>Remember me</span>
                </label>
                <a
                    className='text-blue-700 hover:underline hover:underline-offset-4'
                    href="#">
                        Forgot password
                </a>
            </div>
            <div className="">
                <button 
                    className='mt-4 bg-blue-700 hover:bg-blue-500 hover:text-slate-900 hover:font-semibold px-4 py-2 text-white uppercase rounded text-xs tracking-wider'
                    type="submit"
                >
                    Login
                </button>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                Don&apos;t have an account?{" "}
                <a 
                    className='text-green-700 hover:underline hover:underline-offset-4 hover:text-green-600'
                    href="#">Sign up</a>
            </div>
        </div>
    </section>
  )
}

export default Login