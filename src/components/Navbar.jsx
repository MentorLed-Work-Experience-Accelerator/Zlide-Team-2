import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-4'>
      <Link to='/'>Go to Home</Link>
      <Link to='/about'>Go to About</Link>
    </div>
  )
}

export default Navbar