import React from 'react'

const Verification = () => {
  return (
    <div className='w-[480px] p-16 bg-white rounded-[40px] shadow-2xl z-40'>
      <div>
        <h1 className='font-semibold text-[28px] mb-4 text-dimBlack'>
          Verify!
        </h1>
        <p className="text-[#89939E] mb-8">
          You’ve Signed Up! However, let’s be sure that it’s not someone else using your email.
        </p>
        <p className="text-primary">
          We sent a confirmation link to your email, click that link to proceed.
        </p>
      </div>
    </div>
  )
}

export default Verification