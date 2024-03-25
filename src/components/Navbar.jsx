// import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { zlideLogo } from '../assets'

const Navbar = ({ isLoggedIn, setIsLoggedIn, onLogout, user }) => {

  const navigate = useNavigate()

  return (
    <div className='fixed left-0 right-0 top-0 flex justify-between items-center px-[100px] py-6 bg-white z-50'>
      <img src={zlideLogo} alt="" className="w-[100px] cursor-pointer" onClick={() => navigate('/')} />
      <div className="flex items-center justify-center gap-16 text-lg">
        <Link to='/dashboardone' className='text-primary'>Home</Link>
        <Link to='/about' className='hover:text-primary'>About Us</Link>
        <Link to='/pricing' className='hover:text-primary'>
          Pricing
        </Link>
        <Link to='/dashboard' className='hover:text-primary'>Help</Link>
      </div>
      <div className="flex items-center gap-8">
        {isLoggedIn &&
          (
            <div className='flex items-center'>
              {/* <p className="">
                Welcome back
              </p> */}
              <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full text-lg bg-secondary text-primary outline outline-1 outline-[#ABBED1] focus:outline-[#ABBED1] cursor-pointer">
                {user?.email.slice(0,2).toUpperCase()}
              </div>
            </div>
          )
        }
        {isLoggedIn ? 
          (
            <button
              className="md:py-3 py-2 md:px-12 px-6 text-white bg-primary hover:bg-black hover:outline-black font-semibold outline outline-1 outline-primary rounded-md"
              onClick={() => {
                onLogout()
                navigate('/login')
                // setIsLoggedIn(false)
              }}
            >
              Logout
            </button>) : (<button
              className="md:py-3 py-2 md:px-12 px-6 text-white bg-primary hover:bg-black hover:outline-black font-semibold outline outline-1 outline-primary rounded-md"
              onClick={() => {
                navigate('/sign-up')
              }}
            >
              Get Started
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
