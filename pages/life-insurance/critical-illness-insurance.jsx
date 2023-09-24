import { CoverageDetail } from '@/components/CoverageDetail';
import { Collapse } from 'antd';

import { HeroSection } from '@/components/HeroSection/HeroSection';
import { criticalIllnessItems } from '@/data/faqs/critical-illness-insurance';
const CriticalillnessPage = () => {
  return (
    <>
      <HeroSection
        img='/images/sub/critical.jpeg'
        heading={'Critical Illness Insurance'}
        para={` Critical illness insurance offers extra protection for unforeseen
            medical crises such as heart attacks, strokes, or cancer. Given that
            these situations often result in higher-than-normal medical
            expenses, these policies provide monetary payouts to assist in
            covering these excess costs when conventional health insurance might
            not be sufficient.`}
        color={'#308b84cc'}
        position='top'
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>

      <div className='container mx-auto relative top-[-105px] flex flex-col gap-5'>
        <div className='space-y-1'>
          <h1 className='font-bold'>Critical Illness Insurance</h1>
          <p className='text-sm text-gray-700'>
            Critical illness insurance entails a contract established with a
            life insurance company, entitling you to receive a tax-free lump sum
            if you are diagnosed with a severe and life-threatening ailment. In
            contrast to life insurance, the primary purpose of critical illness
            insurance is not to offer prolonged financial assistance to your
            family after your demise. Instead, it serves to provide financial
            aid during your recuperation from a critical illness.
          </p>
        </div>

        <div className='space-y-2'>
          <h1 className='font-bold'>
            Critical Illness Insurance: Advantages and Disadvantages
          </h1>
          <h1 className='font-bold'>Advantages</h1>
          <ul className='list-disc'>
            <li className='text-sm text-gray-700'>
              Comprehensive Illness Coverage: Critical illness insurance often
              encompasses a wide array of life-threatening conditions and
              diseases. In contemporary policies, coverage extends to as many as
              26 illnesses, including cancer, strokes, heart attacks, and
              Parkinson’s disease.
            </li>
            <li className='text-sm text-gray-700'>
              Comprehensive Illness Coverage: Critical illness insurance often
              encompasses a wide array of life-threatening conditions and
              diseases. In contemporary policies, coverage extends to as many as
              26 illnesses, including cancer, strokes, heart attacks, and
              Parkinson’s disease.
            </li>
            <li className='text-sm text-gray-700'>
              Enhanced Coverage Options: Acquiring critical illness insurance as
              a standalone policy provides greater flexibility in determining
              the policy's scope. The term of your critical illness insurance is
              not linked to that of your life insurance, enabling you to opt for
              shorter or longer coverage durations.
            </li>
            <li className='text-sm text-gray-700'>
              Premium Refunds: Certain critical illness insurance providers
              extend the option of premium refunds to clients who do not submit
              a claim within their coverage period. These refunds often amount
              to a significant percentage of the premiums paid.
            </li>
          </ul>
          {/* <div className='flex gap-2 justify-center'>
            <img width={20} src='/tick.svg' alt='tick' />
            <p className='text-sm text-gray-700'>
              Diverse Benefit Ranges: Critical illness insurance providers
              present a broad spectrum of benefits, spanning from $10,000 to
              several million dollars. This flexibility empowers policyholders
              to select what aligns best with their needs.
            </p>
          </div>

          <div className='flex gap-2 justify-center'>
            <img width={20} src='/tick.svg' alt='tick' />
            <p className='text-sm text-gray-700'>
              Diverse Benefit Ranges: Critical illness insurance providers
              present a broad spectrum of benefits, spanning from $10,000 to
              several million dollars. This flexibility empowers policyholders
              to select what aligns best with their needs.
            </p>
          </div> */}

          {/* <div className='flex gap-2 justify-center'>
            <img width={20} src='/tick.svg' alt='tick' />
            <p className='text-sm text-gray-700'>
              Enhanced Coverage Options: Acquiring critical illness insurance as
              a standalone policy provides greater flexibility in determining
              the policy's scope. The term of your critical illness insurance is
              not linked to that of your life insurance, enabling you to opt for
              shorter or longer coverage durations.
            </p>
          </div>

          <div className='flex gap-2 justify-center'>
            <img width={20} src='/tick.svg' alt='tick' />
            <p className='text-sm text-gray-700'>
              Premium Refunds: Certain critical illness insurance providers
              extend the option of premium refunds to clients who do not submit
              a claim within their coverage period. These refunds often amount
              to a significant percentage of the premiums paid.
            </p>
          </div> */}

          <h1 className='font-bold'>Disadvantages</h1>
          <ul className='list-disc'>
            <li className='text-sm text-gray-700'>
              {' '}
              Elevated Premiums: Critical illness insurance typically carries
              higher premium costs compared to other types of insurance like
              disability insurance. Similar to life insurance, premium rates
              vary based on factors such as age, gender, lifestyle, and health.
            </li>
            <li className='text-sm text-gray-700'>
              {' '}
              Elevated Premiums: Critical illness insurance typically carries
              higher premium costs compared to other types of insurance like
              disability insurance. Similar to life insurance, premium rates
              vary based on factors such as age, gender, lifestyle, and health.
            </li>
          </ul>
          {/* <img width={20} src='/tick.svg' alt='tick' />
            <p className='text-sm text-gray-700'>
              Stringent Underwriting: Due to critical illness insurance being a
              distinct policy from your life insurance coverage, it necessitates
              its own underwriting process. This adds an additional step to the
              process of obtaining coverage.
            </p> */}

          {/* <div className='flex gap-2 justify-center'>
            <img width={20} src='/tick.svg' alt='tick' />
            <p className='text-sm text-gray-700'>
              Stringent Underwriting: Due to critical illness insurance being a
              distinct policy from your life insurance coverage, it necessitates
              its own underwriting process. This adds an additional step to the
              process of obtaining coverage.
            </p>
          </div> */}
        </div>
      </div>

      <div
        className='p-5 relative top-[-50px]'
        id='life-insurance'
        style={{ background: '#308b84' }}
      >
        <h1 className='text-white font-bold text-2xl container mx-auto'>
          Critical Illness Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={criticalIllnessItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default CriticalillnessPage;
