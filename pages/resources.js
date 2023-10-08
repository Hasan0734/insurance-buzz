import { Menu } from 'antd'

import { HeroSection } from '@/components/HeroSection/HeroSection'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import LifeInsurance from '@/components/Resources/LifeInsurance'
import CriticalInsurance from '@/components/Resources/CriticalInsurance'
import DisabilityInsurance from '@/components/Resources/DisabilityInsurance'
import HelthInsurance from '@/components/Resources/HelthInsurance'
import TermInsurance from '@/components/Resources/TermInsurance'
import TravelInsurance from '@/components/Resources/TravelInsurance'
import IntStudentInsurance from '@/components/Resources/IntStudentInsurance'
import SuperVisaInsurance from '@/components/Resources/SuperVisaInsurance'
import RESP from '@/components/Resources/RESP'
import RRSP from '@/components/Resources/RRSP'
import TFSA from '@/components/Resources/TFSA'
import ImportantLinks from '@/components/Resources/ImportantLinks'
import { useEffect, useRef, useState } from 'react'

const items = [
  {
    key: 'life-insurance',
    href: '#life-insurance',
    label: 'Life Insurance',
    children: [
      {
        key: 'life-insurance',
        href: '#life-insurance',
        label: 'Life Insurance',
      },
      {
        key: 'term-insurance',
        href: '#term-insurance',
        label: 'Term Life Insurance',
      },
      {
        key: 'universal-life-insurance',
        href: '#universal-life-insurance',
        label: 'Universal Life Insurance',
      },
      {
        key: 'whole-life-insurance',
        href: '#whole-life-insurance',
        label: 'Whole Life Insurance',
      },
    ],
  },
  {
    key: 'critical-insurance',
    href: '#critical-insurance',
    label: 'Critical Illness Insurance',
  },
  {
    key: 'disability-insurance',
    href: '#disability-insurance',
    label: 'Disability Insurance',
  },
  {
    key: 'health-insurance',
    href: '#health-insurance',
    label: 'Health Insurance',
  },
  {
    key: 'travel-insurance',
    href: '#travel-insurance',
    label: 'Travel Insurance',
    children: [
      {
        key: 'visitor-to-canada-insurance',
        href: '#visitor-to-canada-insurance',
        label: 'Visitor To Canada Insurance',
      },
      {
        key: 'supervisa-insurance',
        href: '#supervisa-insurance',
        label: 'Super Visa Insurance',
      },
      {
        key: 'travel-insurance',
        href: '#travel-insurance',
        label: 'Travel Insurance',
      },
      {
        key: 'international-students-insurance',
        href: '#international-insurance',
        label: 'International Students Insurance',
      },
    ],
  },
  {
    key: 'auto-insurance',
    href: '#auto-insurance',
    label: 'Auto Insurance',
    children: [],
  },
  {
    key: 'home-insurance',
    href: '#home-insurance',
    label: 'Home Insurance',
    children: [],
  },
  {
    key: 'investments',
    href: '#investments',
    label: 'Investments',
    children: [
      {
        key: 'rrsp',
        href: '#rrsp',
        label: 'RRSP',
      },
      {
        key: 'tfsa',
        href: '#tfsa',
        label: 'TFSA',
      },
      {
        key: 'resp',
        href: '#resp',
        label: 'RESP',
      },
    ],
  },

  {
    key: 'claim-process',
    href: '#claim-process',
    label: 'Claims Process',
  },
  {
    key: 'claim-insurance',
    href: '#claim-insurance',
    label: 'Claim Contact Numbers',
  },
  {
    key: 'important-links',
    href: '#important-links',
    label: 'Important Links',
  },
]

const ResourcesPage = () => {
  const [current, setCurrent] = useState('life-insurance')
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const searchParams = useSearchParams()
  const tab = searchParams.get('tab')
  const ref = useRef()

  useEffect(() => {
    console.log(ref.current.offsetTop)
    if (tab) {
      window.scrollTo(0, ref.current.offsetTop - 120)
    }
  }, [tab])

  const onClick = (e) => {
    router.push({ href: pathname, query: { tab: e.key } }, undefined, {
      scroll: false,
    })
    setCurrent(e.key)
  }

  const renderSection = (params) => {
    switch (params) {
      case 'life-insurance':
        return <LifeInsurance />
      case 'critical-insurance':
        return <CriticalInsurance />
      case 'disability-insurance':
        return <DisabilityInsurance />
      case 'health-insurance':
        return <HelthInsurance />
      case 'term-insurance':
        return <TermInsurance />
      case 'travel-insurance':
        return <TravelInsurance />
      case 'international-students-insurance':
        return <IntStudentInsurance />
      case 'supervisa-insurance':
        return <SuperVisaInsurance />
      case 'resp':
        return <RESP />
      case 'rrsp':
        return <RRSP />
      case 'tfsa':
        return <TFSA />
      case 'claim-insurance':
        return <LifeInsurance />
      case 'important-links':
        return <ImportantLinks />
      default:
        return <LifeInsurance />
    }
  }

  return (
    <>
      <HeroSection
        heading={'Frequently Asked Questions'}
        para={`Welcome to the hub of frequently asked questions on insurance.`}
        img={'/images/sub/FAQ-hero-image.jpeg'}
        color={'#5393becc'}
        position='top'
      />
      <div className='bg-[#305fa9] mt-[-165px]' ref={ref}>
        <div className='grid grid-cols-6'>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode='inline'
            items={items}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100vh', fontSize: '16px', fontWeight: 'bold' }}
            theme='dark'
          />
          <div className='col-span-5 container'>{renderSection(tab)}</div>
        </div>
      </div>
    </>
  )
}

export default ResourcesPage
