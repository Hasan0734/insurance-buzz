import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const TopNav = () => {
  const [sticky, setSticky] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts or route changes
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.asPath]);
  return (
    <div>
      <div className='flex sm:flex-row flex-col justify-between items-center max-w-7xl xl:px-0 px-5 m-auto '>
        <div
          onClick={() => router.push('/')}
          className='cursor-pointer flex items-center gap-2'
        >
          <img src='/images/logo.png' alt='logo' />
          <span className='text-white font-bold text-[26px]'>
            InsuranceBuzz
          </span>
        </div>

        <div className='flex gap-5'>
          <div className='flex gap-3 items-center justify-between'>
            <i
              style={{ color: 'white', fontSize: '25px' }}
              className='fa fa-facebook-official cursor-pointer'
              aria-hidden='true'
            ></i>
            {/* <i
              style={{ color: 'white', fontSize: '25px' }}
              className='fa fa-twitter-square cursor-pointer'
              aria-hidden='true'
            ></i> */}
            <i
              style={{ color: 'white', fontSize: '25px' }}
              className='fa fa-linkedin-square cursor-pointer'
              aria-hidden='true'
            ></i>
            <i
              style={{ color: 'white', fontSize: '25px' }}
              className='fa fa-whatsapp cursor-pointer'
              aria-hidden='true'
            ></i>
            <i
              style={{ color: 'white', fontSize: '25px' }}
              className='fa fa-instagram cursor-pointer'
              aria-hidden='true'
            ></i>
          </div>

          <div className=' sm:flex hidden gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <img src='/images/navbarPhone.png' alt='navbar' />
            <div className='flex flex-col'>
              <span className='text-sm text-white'>Insurance Advisor</span>
              <span className='text-sm text-white'>+1 (647) 469-8766</span>
            </div>
          </div>
        </div>

        {/* <div className='flex gap-5 items-center'>
        <div className='flex gap-3 items-center justify-between'>
          <i style={{ color: '#2C5F2D', fontSize: "25px" }} className="fa fa-facebook-official" aria-hidden="true"></i>
          <i style={{ color: '#2C5F2D', fontSize: "25px" }} className="fa fa-twitter-square" aria-hidden="true"></i>
          <i style={{ color: '#2C5F2D', fontSize: "25px" }} className="fa fa-linkedin-square" aria-hidden="true"></i>

        </div>

        <div>
          <button style={{ fontSize: '15px' }} className='p-3 font-semibold bg-[#CAD28F] rounded'>Request Quote</button>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default TopNav;
