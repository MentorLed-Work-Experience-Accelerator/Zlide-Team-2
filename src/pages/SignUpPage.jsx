import React, { useState } from 'react'
import { authBg } from '../assets'
import { Description, SignUp, Verification } from '../components'

const SignUpPage = () => {
  const [current, setCurrent] = useState(0)
  return (
    <div className='relative h-[100vh] pt-[90px] flex justify-center items-center'>
      {current === 0 && (<SignUp />)}
      {current === 1 && (<Verification />)}
      {current === 2 && (<Description />)}
      <img src={authBg} alt="" className="absolute bottom-0" />
    </div>
  )
}

export default SignUpPage