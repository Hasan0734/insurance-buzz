import { ContactForm } from '@/components/ContactForm';
import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';

const AutoInsurance = () => {
  return (
    <>
      <HeroSection
        img='/images/sub/auto.jpeg'
        heading={'Auto Insurance (Coming Soon)'}
        para={`Universal life insurance is a variant of permanent life insurance
            that provides policyholders with premium payment flexibility, a cash
            savings element, and a death benefit. Within universal life
            insurance, individuals have the option to borrow from or withdraw
            funds from the accumulating savings portion, which grows without
            taxation throughout their lifetime.`}
        color='#FF9801CC'
      />
      <div className='relative top-[-165px]'>
        <ContactForm />
      </div>
    </>
  );
};

export default AutoInsurance;
