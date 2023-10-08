import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const TopNav = () => {
  const [sticky, setSticky] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts or route changes
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [router.asPath])
  return (
    <div>
      <div className='flex sm:flex-row flex-col justify-between items-center max-w-7xl xl:px-0 px-5 m-auto '>
        <div
          onClick={() => router.push('/')}
          className='cursor-pointer flex items-center gap-2'
        >
          <img className='h-16' src='/images/logo.png' alt='logo' />
          <div className='flex flex-col'>
            <p className='text-white font-bold text-[26px] m-0'>
              InsuranceBuzz
            </p>
            <p className='text-xs m-0 text-white '>
              Insurance Simplified, Buzz Amplified
            </p>
          </div>
        </div>

        <div className='flex gap-5'>
          <div className=' sm:flex hidden gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <img src='/images/navbarPhone.png' alt='navbar' />
            <div className='flex flex-col'>
              <span className='text-sm text-white'>Insurance Advisor</span>
              <span className='text-sm text-white'>+1 (647) 469-8766</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav
