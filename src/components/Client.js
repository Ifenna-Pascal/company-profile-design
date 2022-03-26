import React from 'react'
import { clients } from '../util/client_list'

function Client() {
  return (
    <div className='my-8'>
        <h1 className='text-[#B5E853] text-3xl tracking-wider mb-6 font-semibold'>Client</h1>
        <div className='grid  grid-cols-1 md:grid-cols-2 max-w-[95%] mx-auto items-center bg-white p-6 lg:grid-cols-3 space-x-3 space-y-8'>
            {
             clients.map(client => (
                 <div className='w-[15rem]  flex items-center h-[15rem]'>
                     <img src={client.image} className="w-full" />
                 </div>
             ))
         }
     </div>
    </div>
  )
}

export default Client