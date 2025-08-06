
import React from 'react'

const HeroSection = () => {
  return (
    <div className=' flex flex-col items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/hero-background.jpg)' }}>
      <h1 className='text-4xl md:text-6xl font-bold text-white'>Welcome to Our Hotel Booking</h1>
      <p className='text-lg md:text-xl text-white'>Easy Booking, Happy Stay</p>
      <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded'>Book Now</button>
    </div>
  )
}

export default HeroSection
