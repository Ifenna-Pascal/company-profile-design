import React from 'react'
import { Members } from '../util/team_list'

const Member = ({name, image, role}) => (
     <div className="flex flex-col items-center space-y-2">
         <div className='flex flex-col items-center w-[18rem] mb-2 h-[18rem]'>
            <img src={image} alt="member" className="w-full rounded-full" />
         </div>
         <span className='text-[#E91E5E] tracking-wider text-2xl  leading-10'>{name}</span>
         <span className='text-white tracking-wider text-2xl  leading-10'>{role}</span>
     </div>
)

function Team() {
  return (
    <div className='my-8'>
          <h1 className='text-[#B5E853] text-3xl tracking-wider mb-6  font-semibold'>Team</h1>
     <div className='grid  grid-cols-1 md:grid-cols-2 space-x-3 space-y-12'>
         {
             Members.map(member => (
                <Member name={member.name} image={member.image} role={member.role} />
             ))
         }
     </div>
    </div>
  )
}

export default Team