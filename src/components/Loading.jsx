import React from 'react'

const Loading = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center bg-[#D7D7D7]'>
      <div className="flex flex-col justify-center items-center bg-white h-[300px] w-[600px] rounded-3xl">
        <div className="w-[180px] h-[100px] rounded-md bg-[#F5F7FA]">
          
        </div>
        <h4 className="text-[#0663C7] text-xl my-4 text-center font-semibold">
          Rest easy!
        </h4>
        <p className="text-[#89939E] text-xs text-center">
          We’re creating your presentation, we’ll be done in just a second!
        </p>
      </div>
      
    </div>
  )
}

export default Loading