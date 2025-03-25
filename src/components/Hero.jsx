import React from 'react'
import pvchero from '../assets/pvchero.png'
import './Hero.css' // Import the CSS file for animations

const Hero = () => {
  return (
    <div className='relative flex flex-col md:flex-row items-center justify-between h-screen bg-gray-700'>
      <div className='w-full md:w-1/2 h-2/3 flex items-center justify-center'>
        <div className='text-center md:text-left p-2 md:p-4'> {/* Reduced padding */}
          <h1 className='text-white text-4xl md:text-6xl font-bold mb-1 md:mb-2'> {/* Reduced margin-bottom */}
            Welcome to PVC Card <span className='text-yellow-800'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UPrint</span>
          </h1>
          <p className='text-white text-lg md:text-xl'>
            Your one-stop solution for all PVC card needs.
          </p>
        </div>
      </div>
      <div className='w-full md:w-1/2 h-full flex items-center justify-center'>
        <img src={pvchero}alt="PVC Hero" className='w-full h-auto object-contain animate-slide-in' />
      </div>
    </div>
  )
}

export default Hero
