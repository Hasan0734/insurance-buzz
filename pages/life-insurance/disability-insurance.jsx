import { CoverageDetail } from '@/components/CoverageDetail';
import { Collapse } from 'antd';

import { HeroSection } from '@/components/HeroSection/HeroSection';
import { disabilityInsuranceItems } from '@/data/faqs/disability-insurance';
const DisabilityPage = () => {
  return (
    <>
      <HeroSection
        heading={'Disability Insurance'}
        para={` Disability insurance offers protection against income loss caused by
            the inability to work due to either permanent or temporary
            disabilities. This type of insurance assists by replacing a portion
            of your lost income and covering medical expenses in the event of an
            accident resulting in disability.`}
        img={'/images/sub/disability.jpeg'}
        color={'#308b84CC'}
        position='10% 30%'
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>

      <div className='container mx-auto relative top-[-105px] flex flex-col gap-5'>
        <div className='space-y-1'>
          <h1 className='font-bold'>Disability Insurance</h1>
          <p className='text-sm text-gray-700'>
            Disability insurance, also known as income protection insurance,
            serves as a financial safeguard that provides coverage against
            income loss by substituting a substantial portion of your salary in
            the event of disability. The insurance provider offering this
            coverage generally commits to replacing 60 to 85 percent of your
            regular income, irrespective of whether the loss of earning capacity
            arises from a sudden accident or a progressive ailment. This
            "benefit" payment is disbursed to you until you achieve a state of
            good health (i.e., resume work) or until the conclusion of your
            disability coverage period – whichever happens first, naturally! The
            periodic benefit payment, whether monthly or weekly, may potentially
            be exempt from taxation, but we'll delve into that aspect later.
          </p>
          <p className='text-sm text-gray-700'>
            Critical illness insurance and disability insurance are separate
            insurance offerings, each bearing significance and synergizing
            effectively.
          </p>
          <p className='text-sm text-gray-700'>
            The necessity for one, the other, or both is contingent on the
            individual policyholder's unique requirements.
          </p>
          <p className='text-sm text-gray-700'>
            Critical illness insurance furnishes a substantial lump sum, serving
            as a financial resource to cover extensive medical costs that often
            arise with severe illnesses.
          </p>
          <p className='text-sm text-gray-700'>
            Disability insurance, on the other hand, ensures a steady income
            replacement stream during the recovery period.
          </p>
        </div>
      </div>

      <div
        className='p-5 relative top-[-50px]'
        id='life-insurance'
        style={{ background: '#308b84' }}
      >
        <h1 className='text-white font-bold text-2xl container mx-auto'>
          Disability Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={disabilityInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default DisabilityPage;
