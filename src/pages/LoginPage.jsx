import React from 'react'
import { Login } from '../components'
import { authBg } from '../assets'

const LoginPage = () => {
  return (
    <div className='relative h-[100vh] pt-[90px] flex justify-center items-center'>
      <Login />
      <img src={authBg} alt="" className="absolute bottom-0" />
    </div>
  )
}

export default LoginPage