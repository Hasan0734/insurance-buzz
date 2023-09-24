import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { Collapse } from 'antd';

import { travelInsuranceItems } from '@/data/faqs/travel-insurance';
const TravelInsurancePage = () => {
  return (
    <>
      <HeroSection
        heading={'Travel Insurance'}
        para={`Travel insurance is a form of insurance designed to assist in
            covering medical expenses in the event of illness or injury while
            traveling. Additionally, it provides protection against financial
            losses stemming from trip cancellations or interruptions.`}
        color={'#ED8B09CC'}
        img={'/images/sub/travel.jpg'}
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>

      <div className='container mx-auto relative top-[-105px] flex flex-col gap-5'>
        <div className='space-y-1'>
          <h1 className='font-bold'>
            What should be included in travel medical insurance for trips
            outside Canada?
          </h1>
          <p className='text-sm text-gray-700'>
            Irrespective of your global destination, there are three fundamental
            medical aspects that your travel health insurance policy should
            consistently encompass: the provision for medical evacuation if
            necessitated, coverage for any pre-existing medical conditions you
            might have, and repatriation benefits that address the cost of
            repatriating your remains in case of demise during your journey.
          </p>
          <p className='text-sm text-gray-700'>
            Each travel medical insurance plan maintains its distinctiveness,
            with a multitude of options accessible during the application
            process.
          </p>
        </div>

        <div className='space-y-1'>
          <h1 className='font-bold'>
            The majority of travel medical insurance policies generally
            encompass:
          </h1>

          <ul className='list-disc ml-4'>
            <li className='text-sm text-gray-700'>
              Urgent medical treatment for sickness or injury.
            </li>
            <li className='text-sm text-gray-700'>
              Prescription medication coverage.
            </li>
            <li className='text-sm text-gray-700'>
              Emergency dental treatment services.
            </li>
            <li className='text-sm text-gray-700'>
              Vital medical apparatus (such as crutches, wheelchairs, braces,
              slings, etc.).
            </li>
            <li className='text-sm text-gray-700'>
              Diagnostic procedures like X-rays and various laboratory tests
              (including bloodwork, ultrasounds, etc.).
            </li>
            <li className='text-sm text-gray-700'>
              Necessary ground, air, or sea ambulance services.
            </li>
            <li className='text-sm text-gray-700'>
              Follow-up appointments with healthcare providers post-medical
              treatment.
            </li>
            <li className='text-sm text-gray-700'>
              Medical evacuation services.
            </li>
            <li className='text-sm text-gray-700'>
              Ambulance transportation to the nearest medical facility.
            </li>
            <li className='text-sm text-gray-700'>
              Provision for meal and lodging expenses during waiting periods for
              medical care.
            </li>
          </ul>
        </div>
      </div>

      <div
        className='p-5 relative top-[-60px]'
        id='life-insurance'
        style={{ background: '#ED8B09' }}
      >
        <h1 className='text-white font-bold text-2xl container mx-auto'>
          Travel Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={travelInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default TravelInsurancePage;
