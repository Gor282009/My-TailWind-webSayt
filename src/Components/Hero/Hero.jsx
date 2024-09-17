import React from 'react'

function Hero() {
  return (
    <div className='flex  bg-brandDark justify-between p-[50px]'>
        <div className=' w-full flex  justify-between  items-center h-[100vh] bg-brandBlue p-[50px] text-center text-white'>
          <div>
          <h1 className='font-inter text-5xl'>Welcome to Our Website</h1>
          <p className='text-xl'>We are a creative and innovative agency specializing in web development.</p>
          </div>
        <div>
          <img src="https://wallpapers.com/images/hd/3000x3000-jxnkuw8l1v440lzg.jpg" alt="" className='h-[500px] w-[500px] object-contain
          rounded-3xl ' />
        </div>
        </div>
    </div>
  )
}

export default Hero