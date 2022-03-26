import React from 'react'

export function Data() {
  return (
    <div className='border-[1px] border-[#3D3D3D] w-full py-4 my-6 px-3'>
        <div className='flex items-start space-x-4'>
            <span className='text-2xl font-semibold tracking-wider text-[#AA759F] '>data</span>
            <div className='flex flex-col space-y-4'>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'>What</span>
                <span className='text-2xl font-semibold -ml-1 tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>=</span>Haskell</span>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>|</span>Idris</span>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>|</span>Rust</span>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>|</span>Blockchain Chain</span>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>|</span>Audit</span>
            </div>
        </div>
        <div className='flex mt-8 items-start space-x-4'>
            <span className='text-2xl font-semibold tracking-wider text-[#AA759F] '>data</span>
            <div className='flex flex-col space-y-4'>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'>Chain</span>
                <span className='text-2xl font-semibold tracking-wider -ml-1 text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>=</span>Cardano</span>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>|</span>Polkadot</span>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>|</span>Solana</span>
            </div>
        </div>
    </div>
  )
}

export const Data2 = () => {
    return (
        <div className='border-[1px] my-4 border-[#3D3D3D] w-full py-4 my-6 px-3'>
        <div className='flex items-start space-x-4'>
            <span className='text-2xl font-semibold tracking-wider text-[#AA759F] '>data</span>
            <div className='flex flex-col space-y-4'>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'>How</span>
                <span className='text-2xl font-semibold -ml-1 tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>=</span>ProjectSetup</span>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>|</span>ProjectArchitecture</span>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>|</span>ProjectManagement</span>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>|</span>ProjectDev</span>
                <span className='text-2xl font-semibold tracking-wider text-[#AF7844]'><span className='mr-2 text-[#F4BF75]'>|</span>ProjectMaintenance</span>
            </div>
        </div>
    </div>
    )
}