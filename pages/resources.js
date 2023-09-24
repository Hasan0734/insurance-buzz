import { Anchor, Collapse } from 'antd';
import { lifeInsuranceItems } from '@/data/faqs/life-insurance';
import { travelInsuranceItems } from '@/data/faqs/travel-insurance';
import { termLifeInsuranceItems } from '@/data/faqs/term-life-insurance';
import { disabilityInsuranceItems } from '@/data/faqs/disability-insurance';
import { claimInsuranceItems } from '@/data/faqs/claim-insurance';
import { criticalIllnessItems } from '@/data/faqs/critical-illness-insurance';
import Link from 'next/link';
import { healthInsuranceItems } from '@/data/faqs/health-insurance';
import { respInsuranceItems } from '@/data/faqs/resp';
import { tfsaInsuranceItems } from '@/data/faqs/tfsa';
import { rrspInsuranceItems } from '@/data/faqs/rrsp';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { superVisaInsuranceFAQs } from '@/data/faqs/super-visa-insurance';
import { internationalStudentsInsuranceFAQs } from '@/data/faqs/international-student-insurance';

const ResourcesPage = () => {
  return (
    <>
      <HeroSection
        heading={'Frequently Asked Questions'}
        para={`Welcome to the hub of frequently asked questions on insurance.`}
        img={'/images/sub/FAQ-hero-image.jpeg'}
        color={'#5393becc'}
        position='top'
      />
      <div className='bg-[#305fa9] relative top-[-165px]'>
        <div className='grid grid-cols-6'>
          <Anchor
            offsetTop={150}
            style={{ background: '', height: '100vh', paddingTop: '40px' }}
            replace
            items={[
              {
                key: 'life-insurance',
                href: '#life-insurance',
                title: 'Life Insurance',
              },
              {
                key: 'health-insurance',
                href: '#health-insurance',
                title: 'Health Insurance',
              },
              {
                key: 'term-insurance',
                href: '#term-insurance',
                title: 'Term Life Insurance',
              },
              {
                key: 'travel-insurance',
                href: '#travel-insurance',
                title: 'Travel Insurance',
              },
              {
                key: 'supervisa-insurance',
                href: '#supervisa-insurance',
                title: 'Super Visa Insurance',
              },
              {
                key: 'international-students-insurance',
                href: '#international-insurance',
                title: 'International Students Insurance',
              },
              {
                key: 'disability-insurance',
                href: '#disability-insurance',
                title: 'Disability Insurance',
              },
              {
                key: 'critical-insurance',
                href: '#critical-insurance',
                title: 'Critical Illness Insurance',
              },
              {
                key: 'resp',
                href: '#resp',
                title: 'RESP',
              },
              {
                key: 'rrsp',
                href: '#rrsp',
                title: 'RRSP',
              },
              {
                key: 'tfsa',
                href: '#tfsa',
                title: 'TFSA',
              },
              {
                key: 'critical-insurance',
                href: '#critical-insurance',
                title: 'Critical Illness Insurance',
              },
              {
                key: 'claim-insurance',
                href: '#claim-insurance',
                title: 'Claim Process',
              },
              {
                key: 'important-links',
                href: '#important-links',
                title: 'Important Links',
              },
            ]}
          />

          <div className='col-span-5 pt-[20px] container mr-20'>
            <div
              className='p-4 '
              id='life-insurance'
              style={{ minHeight: '100vh', background: '#305fa9' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                Life Insurance FAQs
              </h1>
              <Collapse
                ghost
                items={lifeInsuranceItems}
                // defaultActiveKey={['1']}
              />
            </div>
            <div
              className='p-4 '
              id='health-insurance'
              style={{ minHeight: '100vh', background: '#61b1bc' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                Health Insurance FAQs
              </h1>
              <Collapse
                ghost
                items={healthInsuranceItems}
                // defaultActiveKey={['1']}
              />
            </div>
            <div
              className='p-4'
              id='travel-insurance'
              style={{ minHeight: '100vh', background: '#9ab88c' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                Travel Insurance FAQs
              </h1>
              <Collapse
                ghost
                items={travelInsuranceItems}
                // defaultActiveKey={['1']}
              />
            </div>
            <div
              id='term-insurance'
              className='p-4'
              style={{ minHeight: '100vh', background: '#ed8b08' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                Term Insurance FAQs
              </h1>
              <Collapse
                ghost
                items={termLifeInsuranceItems}
                // defaultActiveKey={['1']}
              />
            </div>
            <div
              className='p-4'
              id='supervisa-insurance'
              style={{ minHeight: '100vh', background: '#d6b940' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                Super Visa Insurance FAQs
              </h1>
              <Collapse
                ghost
                items={superVisaInsuranceFAQs}
                // defaultActiveKey={['1']}
              />
            </div>
            <div
              className='p-4'
              id='international-students-insurance'
              style={{ minHeight: '100vh', background: '#6f909e' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                International Student Insurance FAQs
              </h1>
              <Collapse ghost items={internationalStudentsInsuranceFAQs} />
            </div>
            <div
              id='disability-insurance'
              className='p-4'
              style={{ minHeight: '100vh', background: '#6f909e' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                Disability Insurance FAQs
              </h1>
              <Collapse
                ghost
                items={disabilityInsuranceItems}
                // defaultActiveKey={['1']}
              />
            </div>
            <div
              id='critical-insurance'
              className='p-4'
              style={{ minHeight: '100vh', background: '#308b84' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                Critical Illness Insurance FAQs
              </h1>
              <Collapse
                ghost
                items={criticalIllnessItems}
                // defaultActiveKey={['1']}
              />
            </div>

            <div
              id='resp'
              className='p-4'
              style={{ minHeight: '100vh', background: '#5393becc' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                RESP Insurance FAQs
              </h1>
              <Collapse
                ghost
                items={respInsuranceItems}
                // defaultActiveKey={['1']}
              />
            </div>

            <div
              id='tfsa'
              className='p-4'
              style={{ minHeight: '100vh', background: '#9AB88CCC' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                TFSA Insurance FAQs
              </h1>
              <Collapse
                ghost
                items={tfsaInsuranceItems}
                // defaultActiveKey={['1']}
              />
            </div>

            <div
              id='rrsp'
              className='p-4'
              style={{ minHeight: '100vh', background: '#256c18CC' }}
            >
              <h1 className='text-white font-bold text-2xl'>
                RRSP Insurance FAQs
              </h1>
              <Collapse
                ghost
                items={rrspInsuranceItems}
                // defaultActiveKey={['1']}
              />
            </div>

            <div
              id='important-links'
              className='p-4'
              style={{ minHeight: '100vh', background: '#237a23' }}
            >
              <div className=' container mx-auto'>
                <h2 className='text-3xl font-bold text-white'>
                  Important Links
                </h2>
              </div>

              <div className='mt-8 container mx-auto flex flex-col gap-4'>
                <Link
                  className='text-sm text-white underline'
                  href={
                    'https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html'
                  }
                >
                  Newcomers to Canada
                </Link>
                <Link
                  className='text-sm text-white underline'
                  href={
                    'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html'
                  }
                >
                  Services and information for new Immigrants{' '}
                </Link>
                <Link
                  className='text-sm text-white underline'
                  href={
                    'https://www.ontario.ca/page/apply-ohip-and-get-health-card'
                  }
                >
                  Apply for OHIP and get a health card
                </Link>
                <Link
                  className='text-sm text-white underline'
                  href={
                    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams.html'
                  }
                >
                  Medical Examination
                </Link>
                <Link
                  className='text-sm text-white underline'
                  href={
                    'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit- canada/parent-grandparent-super-visa/eligibility.html'
                  }
                >
                  Eligibility for Super visa
                </Link>
                <Link
                  className='text-sm text-white underline'
                  href={
                    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5256-applying-visitor-visa-temporary-resident-visa.html#incometables'
                  }
                >
                  Income Requirements for super visa
                </Link>
                <Link
                  href={
                    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html'
                  }
                  className='text-sm text-white underline'
                >
                  Super visa processing time
                </Link>
              </div>
            </div>
            {/* <div id='part-3' style={{ height: '100vh', background: '#61b1bc' }} />
          <div id='part-3' style={{ height: '100vh', background: '#8a7ec3' }} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
