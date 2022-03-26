import React from 'react'

function Footer() {
  return (
    <footer className='border-dashed border-[#B5E853]  border-t-[1px] py-20 px-3'>
        <h1 className='text-[#B5E853] max-w-[70%] mx-auto  text-3xl mb-2 font-bold'>./ <span>Contact</span></h1>
        <div className='max-w-[67%] mx-auto flex flex-col items-start justify-between'>
        <span className='text-white tracking-wider text-3xl mb-3 leading-10'> If you need help with a project, please email  <a className='text-[#46B6F5] border-b-2 border-[#46B6F5]'>info@mlabs.city</a>.</span>
        <span className='text-white tracking-wider text-3xl  leading-10'> If you are looking for a job, please email.  <a className='text-[#46B6F5] border-b-2 border-[#46B6F5]'>jobs@mlabs.city </a>.</span>
        </div>
    </footer>
  )
}

export default Footer