import React, { useEffect, useRef } from 'react'
import './Processstep.css' // Import the CSS file for animations

const Processstep = () => {
  const headingRef = useRef(null)
  const circleRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          } else {
            entry.target.classList.remove('fade-in')
          }
        })
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    )

    if (headingRef.current) {
      observer.observe(headingRef.current)
    }

    circleRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current)
      }
      circleRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  return (
    <div>
      <div className='container mx-auto mt-12 px-4 sm:px-6 lg:px-8'>
      <div className='border-t-4 border-gray-300 my-8'></div> {/* Add this line */}
        <h2 ref={headingRef} className='text-3xl font-bold text-center'>
          Steps to print your PVC CARD
        </h2>
        <div className='flex flex-wrap justify-center items-center mt-8'>
          {[
            'Select your PVC Card Service',
            'Upload Documents',
            'Make Payments',
            'Team check your documents'
          ].map((step, index) => (
            <React.Fragment key={index}>
              <div ref={(el) => (circleRefs.current[index] = el)} className='circle flex items-center justify-center text-center'>
                {step}
                <div className='step-index'>{`Step ${index + 1}`}</div>
              </div>
              {index < 3 && (
                <div className='arrow'>
                  &rarr;
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className='flex flex-wrap justify-center items-center mt-8'>
          {[
            'High quality prints',
            'Secure Packaging',
            'Doorstep Delivery'
          ].map((step, index) => (
            <React.Fragment key={index + 4}>
              <div ref={(el) => (circleRefs.current[index + 4] = el)} className='circle flex items-center justify-center text-center'>
                {step}
                <div className='step-index'>{`Step ${index + 4 + 1}`}</div>
              </div>
              {index < 2 && (
                <div className='arrow'>
                  &rarr;
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Processstep
