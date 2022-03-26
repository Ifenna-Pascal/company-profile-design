import React from 'react'

function Nav() {
  return (
    <nav className='bg-[#171717] border-dashed border-[#B5E853] border-b-[1px] py-12 px-3'>
        <h1 className='text-[#B5E853] max-w-[70%] mx-auto  text-3xl mb-2 font-bold'>./ <span>MLabs</span></h1>
        <div className='max-w-[70%] mx-auto  flex items-center justify-between'>
            <div className='py-4'>
                <span className='text-gray-500 text-xl tracking-wider ml-8'>Haskell, Rust, Blockchain & AI consultancy</span>
            </div>
            <div className="flex space-x-4 text-base tracking-wide items-center">
                <a href="#" className='text-[#E91E5E] border-b-[0.5px] border-[#E91E5E]'>Home</a>
                <a href="#" className='text-[#E91E5E] border-b-[0.5px] border-[#E91E5E]'>Jobs</a>
                <a href="#" className='text-[#E91E5E] border-b-[0.5px] border-[#E91E5E]'>Github</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav