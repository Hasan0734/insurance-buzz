'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { CoverageDetail } from '@/components/CoverageDetail';
import { useRouter } from 'next/router';
import { Collapse } from 'antd';
import { lifeInsuranceItems } from '@/data/faqs/life-insurance';
import { termLifeInsuranceItems } from '@/data/faqs/term-life-insurance';
const LifeInsurance = () => {
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

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: '1343px' }],
  };

  return (
    <>
      {/* <img src="/images/lifeinsurance.png" alt='lifeinsurance' className='w-full' /> */}

      <div
        className=' relative top-[-165px] '
        style={{
          background: `url(${'/images/sub/life.jpeg'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='py-52 pb-40 bg-[#45A1D3CC]'>
          <div className=' max-w-7xl m-auto flex flex-col gap-5 xl:px-0 px-10'>
            <Slider {...settings}>
              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
                  Term Life Insurance
                </h1>

                <h3 className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
                  Term insurance is a type of life insurance that provides
                  financial protection to the policyholder for a predetermined
                  duration. If the insured person passes away within the
                  policy's timeframe, the company disburses a death benefit to
                  the designated beneficiary.
                </h3>
              </div>

              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
                  Universal Life Insurance
                </h1>

                <h3 className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
                  Universal life insurance is a variant of permanent life
                  insurance that provides policyholders with premium payment
                  flexibility, a cash savings element, and a death benefit.
                  Within universal life insurance, individuals have the option
                  to borrow from or withdraw funds from the accumulating savings
                  portion, which grows without taxation throughout their
                  lifetime.
                </h3>
              </div>

              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
                  Whole Life Insurance
                </h1>

                <h3 className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
                  Universal life insurance is a variant of permanent life
                  insurance that provides policyholders with premium payment
                  flexibility, a cash savings element, and a death benefit.
                  Within universal life insurance, individuals have the option
                  to borrow from or withdraw funds from the accumulating savings
                  portion, which grows without taxation throughout their
                  lifetime.
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className='relative top-[-145px]'>
        <CoverageDetail />
      </div>

      <div
        className='p-5 relative top-[-90px]'
        id='life-insurance'
        style={{ background: '#45A1D3' }}
      >
        <h1 className='text-white font-bold text-2xl container mx-auto'>
          Life Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={lifeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
      <div
        className='p-5 relative top-[-90px]'
        id='life-insurance'
        style={{ background: '#45A1D3' }}
      >
        <h1 className='text-white font-bold text-2xl container mx-auto'>
          Term Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={termLifeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
      {/* <div
        className='p-5 relative top-[-90px]'
        id='life-insurance'
        style={{ background: '#45A1D3' }}
      >
        <h1 className='text-white font-bold text-2xl container mx-auto'>
          Term Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={termLifeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div> */}
    </>
  );
};

export default LifeInsurance;
