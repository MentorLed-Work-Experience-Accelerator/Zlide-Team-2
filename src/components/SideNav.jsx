// import React from 'react'
import { clock } from '../assets'
import { drafts } from '../assets'
import { star } from '../assets'

const SideNav = () => {
  return (
    <div className='relative block w-48 text-sm mt-10 pl-4 left-0 right-0 ml-10 space-y-4'>
        <div className="flex items-center space-x-2 cursor-pointer">
            <img src={clock} alt="clock" />
            <p>Recent presentations</p>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
            <img src={drafts} alt="drafts" />
            <p>Drafts</p>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
            <img src={star} alt="star" />
            <p>Starred</p>
        </div>
    </div>
  )
}

export default SideNav
