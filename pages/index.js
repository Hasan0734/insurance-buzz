import InsuranceSolutions from '@/components/InsuranceSolutions'

import WhyChoose from '@/components/WhyChoose/WhyChoose'
import Hero from '@/components/Hero'
import Head from 'next/head'
import TravelSlider from '@/components/TravelSlider'
import LifeSlider from '@/components/LifeSlider'
import { Testimonials } from '@/components/Testimonials/Testimonials'

import Comparisons from '@/components/Comparisons/Comparisons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Insurance Buzz</title>
      </Head>
      <div
        className=' relative top-[-165px] z-0 '
        style={{
          background: `url(${'/images/home.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Hero />
      </div>

      <div
        style={{
          background: `url(${'/images/new/team-trust.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='relative top-[-165px]'
      >
        <WhyChoose />
      </div>

      <div className='flex flex-col relative top-[-125px] bg-[white] p-10 pt-10 gap-4'>
        <span className=' text-center my-4 text-2xl text-black font-bold'>
          Travel Insurance Providers
        </span>
        <TravelSlider />

        <span className='mt-5 text-center my-4 text-2xl text-black font-bold'>
          Life Insurance Providers
        </span>
        <LifeSlider />
      </div>

      <div
        className='px-5 relative top-[-100px] xl:px-0 mt-16  py-20 after:absolute after:w-full after:h-full after:inset-0
         after:bg-black/10 -z-[11] after:-z-10'
        style={{
          background: 'url(/images/5348666.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{ boxShadow: '0px 5px 7px 0px rgb(114 114 114 / 25%)' }}
          className=' px-5 py-6  xl:max-w-7xl max-w-screen-lg rounded-xl backdrop-blur bg-white/80 m-auto opacity-100 z-10'
        >
          <div className=''>
            <span className='text-black text-center text-xl mb-4 font-bold'>
              Reliable Insurance Solutions
            </span>
          </div>
          <div className='grid mt-4 md:grid-cols-4 grid-cols-1 gap-5'>
            <InsuranceSolutions
              image={'/images/dollar-symbol.png'}
              countNumber={0}
              suffix={''}
              title={'Fees'}
            />
            <InsuranceSolutions
              image={'/images/building-orange.png'}
              countNumber={30}
              suffix={'+'}
              title={'Insurance Companies'}
            />
            <InsuranceSolutions
              image={'/images/insurance-policy-orange.png'}
              countNumber={12}
              suffix={'K+'}
              title={'Insurance Policies'}
            />
            <InsuranceSolutions
              image={'/images/insurancesol2-orange.png'}
              countNumber={8}
              suffix={'+'}
              title={'Insurance Types'}
            />
          </div>
        </div>
      </div>
      <div className=''>
        <div className='container mx-auto'>
          <h2
            className='text-black p-[0.40rem] mb-2 text-center text-4xl font-bold
       '
          >
            <span className=' relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1'>
              How Insurance Buzz Works?
            </span>
          </h2>
          <p className='max-w-5xl mx-auto mt-6 text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <div className='relative my-20 max-w-5xl mx-auto'>
            <div className='flex items-center justify-center'>
              <div className='relative h-[332px] md:h-[672px] w-[332px] md:w-[672px] rounded-full bg-[#cff3fd] flex items-center justify-center'>
                <img
                  className='w-[70%]'
                  src='/images/smart-phone2.png'
                  alt='phone-imge'
                />
              </div>
            </div>

            <div className=' md:absolute  inset-0 mt-5 sm:mt-0'>
              <div className='flex flex-col items-center gap-10 h-full justify-center'>
                <div className='bg-white p-5 shadow-md rounded-md max-w-sm md:self-start'>
                  <h4 className='text-orange-500 text-lg font-semibold uppercase'>
                    Step 1
                  </h4>
                  <h2 className='text-xl font-bold'>Get quotes quickly</h2>
                  <p className='text-sm'>
                    Get the best quotes across insurance companies
                  </p>
                </div>
                <div className='bg-white p-5 shadow-md rounded-md max-w-sm md:self-end'>
                  <h4 className='text-orange-500 text-lg font-semibold uppercase'>
                    Step 2
                  </h4>
                  <h2 className='text-xl font-bold'>Zero in on best option</h2>
                  <p className='text-sm'>
                    Our advisors guide you to the best product and company for
                    your unique situations
                  </p>
                </div>
                <div className='bg-white p-5 shadow-md rounded-md max-w-sm md:self-start'>
                  <h4 className='text-orange-500 text-lg font-semibold uppercase'>
                    Step 3
                  </h4>
                  <h2 className='text-xl font-bold'>Submit application</h2>
                  <p className='text-sm'>
                    Once finalised, we help submit your application, get you
                    approved and deliver your policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Comparisons />

      <div className=''>
        <h2
          className='text-black p-[0.40rem] mb-2 text-center text-4xl font-bold
       '
        >
          <span className=' relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1'>
            Testimonials
          </span>
        </h2>

        <Testimonials />
      </div>
    </>
  )
}
