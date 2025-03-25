import React, { useEffect, useRef } from 'react'
import './Service.css' // Import the CSS file for animations
import aadharsample from '../assets/aadharsample.webp'
import drivinglicenceSample from '../assets/drivinglicence-sample.webp'
import passportphotos from '../assets/passportphotos.webp'
import aaushmansample from '../assets/aaushmansample.webp'
import eshamsample from '../assets/e-shamsample.jpg'
import rashancardsample from '../assets/rashancardsample.webp'
import pancardsample from '../assets/pancardsample.webp'
import RCsample from '../assets/RCsample.webp'
import voteridsample from '../assets/voteridsample.webp'
import Processstep from './Processstep'

const Service = () => {
  const titleRef = useRef(null)
  const headingRef = useRef(null)
  const gridItemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    if (headingRef.current) {
      observer.observe(headingRef.current)
    }

    gridItemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
      if (headingRef.current) {
        observer.unobserve(headingRef.current)
      }
      gridItemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  return (
    <div>
      <div className='container mx-auto'>
        <h1 ref={titleRef} className='text-4xl font-bold text-center mt-8 fade-in-up'>
          Our Services
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
          {['Design', 'Printing', 'Delivery'].map((service, index) => (
            <div
              key={service}
              ref={(el) => (gridItemRefs.current[index] = el)}
              className='bg-gray-300 p-4 rounded-lg bubble-pop'
            >
              <h2 className='text-2xl font-bold'>{service}</h2>
              <p className='mt-4'>
                {service === 'Design' && 'We design PVC cards for various purposes. Our team of designers will help you create a card that suits your needs.'}
                {service === 'Printing' && 'We use the latest technology to print high-quality PVC cards. Our cards are durable and long-lasting.'}
                {service === 'Delivery' && 'We deliver your PVC cards to your doorstep. Our delivery partners ensure that your cards reach you safely.'}
              </p>
{/*               <button className='order-button'>Order Now{/* </button> */}
            </div>
          ))}
        </div>
        <h2 ref={headingRef} className='text-3xl font-bold text-center mt-12 fade-in'>Mostly Used Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
          {[
            { name: 'Aadhar Card', image: aadharsample, price: '$10' },
            { name: 'Driving Licence', image: drivinglicenceSample, price: '$15' },
            { name: 'Passport Photos', image: passportphotos, price: '$5' }
          ].map((service, index) => (
            <div
              key={service.name}
              ref={(el) => (gridItemRefs.current[index + 3] = el)} // Ensure unique refs for new items
              className='bg-gray-300 p-4 rounded-lg bubble-pop'
            >
              <img src={service.image} alt={service.name} className='w-full h-auto rounded-lg mb-4' />
              <h2 className='text-2xl font-bold'>{service.name}</h2>
              <p className='mt-4'>{service.price}</p>
              <button className='order-button'>Order Now</button>
            </div>
          ))}
        </div>
        <h2 className='text-3xl font-bold text-center mt-12 fade-in'>Additional Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
          {[
            { name: 'Ayushman Card', image: aaushmansample, price: '$12' },
            { name: 'E-Sham Card', image: eshamsample, price: '$8' },
            { name: 'Ration Card', image: rashancardsample, price: '$6' }
          ].map((service, index) => (
            <div
              key={service.name}
              ref={(el) => (gridItemRefs.current[index + 6] = el)} // Ensure unique refs for new items
              className='bg-gray-300 p-4 rounded-lg bubble-pop'
            >
              <img src={service.image} alt={service.name} className='w-full h-auto rounded-lg mb-4' />
              <h2 className='text-2xl font-bold'>{service.name}</h2>
              <p className='mt-4'>{service.price}</p>
              <button className='order-button'>Order Now</button>
            </div>
          ))}
        </div>
        <h2 className='text-3xl font-bold text-center mt-12 fade-in'>More Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
          {[
            { name: 'PAN Card', image: pancardsample, price: '$20' },
            { name: 'RC Book', image: RCsample, price: '$25' },
            { name: 'Voter ID', image: voteridsample, price: '$10' }
          ].map((service, index) => (
            <div
              key={service.name}
              ref={(el) => (gridItemRefs.current[index + 9] = el)} // Ensure unique refs for new items
              className='bg-gray-300 p-4 rounded-lg bubble-pop'
            >
              <img src={service.image} alt={service.name} className='w-full h-auto rounded-lg mb-4' />
              <h2 className='text-2xl font-bold'>{service.name}</h2>
              <p className='mt-4'>{service.price}</p>
              <button className='order-button'>Order Now</button>
            </div>
          ))}
        </div>
      </div>
      <div><Processstep/></div>
    </div>
  )
}

export default Service
