import React from 'react'

const Description = () => {
  return (
    <div className='w-[600px] p-16 bg-white rounded-[40px] shadow-2xl z-40'>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className='font-semibold text-[28px] text-dimBlack'>
            Let’s know you!
          </h1>
          <p className="font-medium text-lg text-primary cursor-pointer">
            Skip
          </p>
        </div>
        <p className="text-[#89939E] mb-16">
          What best describe you and how you’re going to use Zlide. This will help us personalise curated content for you.
        </p>
        <div className="flex w-full flex-wrap gap-6 mb-16">
          <button className="py-3 px-8 rounded-md bg-secondary text-primary flex items-center justify-center gap-4">
            Entrepreneur
          </button>
          <button className="py-3 px-8 rounded-md bg-secondary text-primary flex items-center justify-center gap-4">
            Manager
          </button>
          <button className="py-3 px-8 rounded-md bg-secondary text-primary flex items-center justify-center gap-4">
            Marketer
          </button>
          <button className="py-3 px-8 rounded-md bg-primary text-white flex items-center justify-center gap-4">
            Freelancer
          </button>
          <button className="py-3 px-8 rounded-md bg-secondary text-primary flex items-center justify-center gap-4">
            Teacher
          </button>
          <button className="py-3 px-8 rounded-md bg-secondary text-primary flex items-center justify-center gap-4">
            Student
          </button>
        </div>
        <button className="py-3 w-full rounded-md bg-primary text-white flex items-center justify-center gap-4">
          Continue
        </button>
      </div>
    </div>
  )
}

export default Description