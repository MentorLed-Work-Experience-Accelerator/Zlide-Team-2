import React, { useState } from 'react'
import { ForgotPassword1, ForgotPassword2, Login } from '../components'
import { authBg } from '../assets'

const LoginPage = ({ onLogin }) => {
  const [current, setCurrent] = useState(0)
  return (
    <div className='relative h-[100vh] pt-[90px] flex justify-center items-center'>
      {current === 0 && (<Login onLogin={onLogin} setCurrent={setCurrent} />)}
      {current === 1 && (<ForgotPassword1 setCurrent={setCurrent} />)}
      {current === 2 && (<ForgotPassword2 setCurrent={setCurrent} />)}
      <img src={authBg} alt="" className="absolute bottom-0" />
    </div>
  )
}

export default LoginPage