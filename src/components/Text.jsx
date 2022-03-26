import React from 'react'

function Text({ heading, children }) {
  return (
    <div className='py-5'>
           <h1 className='text-[#B5E853] text-3xl tracking-wider mb-6 font-semibold'>{heading}</h1>
           <div className='text-white tracking-wider text-2xl  leading-10'>
               { children }
           </div>
    </div>
  )
}

export default Text