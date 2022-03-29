import React from 'react'
import { Link } from 'react-router-dom'

function Nav({header}) {
  return (
    <nav className='bg-[#171717] border-dashed border-[#B5E853] border-b-[1px] py-16 px-3'>
        <h1 className='text-[#B5E853] max-w-[93%] lg:max-w-[70%] mx-auto  text-3xl mb-2 font-bold'>./ <span>{header}</span></h1>
        <div className='lg:max-w-[70%] max-w-[93%] mx-auto  flex md:flex-row flex-col items-start md:items-center justify-between'>
            <div className='py-4'>
                <span className='text-gray-500 text-xl tracking-wider lg:ml-8'>Haskell, Rust, Blockchain & AI consultancy</span>
            </div>
            <div className="flex space-x-4 text-base tracking-wide items-center">
                <Link to='/' className='text-[#E91E5E] border-b-[0.5px] border-[#E91E5E]'>Home</Link>
                <Link to='/careers' className='text-[#E91E5E] border-b-[0.5px] border-[#E91E5E]'>Jobs</Link>
                <a href="#" className='text-[#E91E5E] border-b-[0.5px] border-[#E91E5E]'>Github</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav