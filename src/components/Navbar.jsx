import React, { useState, useRef, useEffect } from 'react'
import pvccard from '../assets/pvccard.png'
import search_icon from '../assets/search_icon.png'
import profile_icon from '../assets/profile_icon.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [profileMenuVisible, setProfileMenuVisible] = useState(false)
  const profileMenuRef = useRef(null)

  const handleMouseEnter = () => {
    setProfileMenuVisible(true)
  }

  const handleMouseLeave = () => {
    setProfileMenuVisible(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [profileMenuRef])

  return (
    <div className='bg-gray-800 text-white'>
      <div className='container mx-auto flex items-center justify-between py-4 px-6'>
        <div className='flex items-center'>
          <a href={pvccard} target="_blank" rel="noopener noreferrer">
            <img src={pvccard} alt="PVC Card Logo" className='h-15 w-20' />
          </a>
          <p className='ml-4 text-lg leading-tight'>
            <em>
              <span className='text-red-500'>pvc</span> <br />
              <span className='text-blue-500'>&nbsp;&nbsp;&nbsp; card</span><br />
              <span className='text-green-500 cursor-pointer'>uprint.in</span>
            </em>
          </p>
        </div>
        <ul className='hidden md:flex space-x-6'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'border-b-2 border-white' : 'hover:text-gray-400'}>
            <p>Home</p>
          </NavLink>
          <NavLink to='/service' className={({ isActive }) => isActive ? 'border-b-2 border-white' : 'hover:text-gray-400'}>
            <p>Service</p>
          </NavLink>
          <NavLink to='/orders' className={({ isActive }) => isActive ? 'border-b-2 border-white' : 'hover:text-gray-400'}>
            <p>Orders</p>
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'border-b-2 border-white' : 'hover:text-gray-400'}>
            <p>Contact</p>
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'border-b-2 border-white' : 'hover:text-gray-400'}>
            <p>About</p>
          </NavLink>
        </ul>
        <div className='flex items-center space-x-4'>
          <img src={search_icon} alt="Search Icon" className='cursor-pointer' />
          <div
            className='relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={profileMenuRef}
          >
            <img
              src={profile_icon}
              alt="Profile Icon"
              className='cursor-pointer'
              onClick={() => setProfileMenuVisible(!profileMenuVisible)}
            />
            <div className={`absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg ${profileMenuVisible ? 'block' : 'hidden'} z-10`}>
              <p className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Profile</p>
              <p className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Orders</p>
              <p className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Logout</p>
            </div>
          </div>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setVisible(!visible)} className='text-white'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
      </div>
      {visible && (
        <div className='md:hidden'>
          <ul className='flex flex-col items-center space-y-4 py-4'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'border-b-2 border-white' : 'hover:text-gray-400'}>
              <p>Home</p>
            </NavLink>
            <NavLink to='/service' className={({ isActive }) => isActive ? 'border-b-2 border-white' : 'hover:text-gray-400'}>
              <p>Service</p>
            </NavLink>
            <NavLink to='/orders' className={({ isActive }) => isActive ? 'border-b-2 border-white' : 'hover:text-gray-400'}>
              <p>Orders</p>
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'border-b-2 border-white' : 'hover:text-gray-400'}>
              <p>Contact</p>
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'border-b-2 border-white' : 'hover:text-gray-400'}>
              <p>About</p>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar