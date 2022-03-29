import React from 'react'
import Text from './Text'


function Body2() {
  return (
    <div className='bg-[#1A1A1A] py-8 max-w-[93%] lg:max-w-[66%] mx-auto'>
    <Text heading="Careers & Internship">
        <span>
            Overview of all open positions at MLabs.
        </span>
    </Text>
    <div className='py-5'>
        <h1 className='text-[#B5E853] text-3xl tracking-wider  font-semibold'>Haskell</h1>
        <div className='py-8'>
        <span className='text-[#B5E853] text-xl tracking-wider mb-6 font-semibold'>Haskell Job</span>
        <div className='text-white tracking-wider text-2xl  leading-10'>
            We are currently hiring for senior and junior <span className='text-[#E91E5E]'>Haskell</span> positions. Blockchain knowledge a bonus, but not required.
            You can apply for our Haskell positions here: <span className='text-[#46B6F5] border-b-2 border-[#46B6F5]'>APPLY FOR A HASKELL POSITION.</span>
        </div>
        </div>
          <div className='py-8'>
        <span className='text-[#B5E853] text-xl tracking-wider mb-6 font-semibold'>Haskell Internship</span>
        <div className='text-white tracking-wider text-2xl  leading-10'>
            We are doing both 3- and 6-month internship programs in Haskell, where you get to work with 
            a team on some of our smart-contract projects. You will be assigned a supervisor who will work with you and help
            you learn more about blockchain and Cardano, as well as Haskell!
        </div>
        </div>
    </div>
    <h1 className='text-[#B5E853] text-3xl tracking-wider  font-semibold'>Rust</h1> 
    <div className='py-8'>
        <span className='text-[#B5E853] text-xl tracking-wider mb-6 font-semibold'>Rust Job</span>
        <div className='text-white tracking-wider text-2xl  leading-10'>
        We are currently hiring for a senior <span  className='text-[#E91E5E]'>Rust</span> position. Blockchain and Polkadot/Substrate or Solana experience a bonus, but not required.
        <span className='text-[#46B6F5] border-b-2 border-[#46B6F5]'> You can apply for our Rust positions here: APPLY FOR A RUST POSITION. </span>
        </div>
        </div>
          <div className='py-8'>

        <span className='text-[#B5E853] text-xl tracking-wider mb-6 font-semibold'>Rust Internship</span>
        <div className='text-white tracking-wider text-2xl  leading-10'>
                If you are interested in a Rust internship, please let us know! We don’t have 
                a specified format yet, but if there’s interest we can do 
                internships for Rust as well! You can apply via the above link for Rust.
        </div>
    </div>
</div>
  )
}

export default Body2