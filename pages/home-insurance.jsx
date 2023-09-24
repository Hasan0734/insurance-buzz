import { ContactForm } from '@/components/ContactForm';
import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const HomeInsurance = () => {
  return (
    <>
      <HeroSection
        heading={'Home Insurance (Coming Soon)'}
        para={`Ensure your family's future even when you're not there - life
            insurance offers the peace of mind that your loved ones will be
            financially secure. It's a lasting gift that guarantees protection
            and support, no matter what life brings.`}
        img='/images/new/home-insurance.jpg'
        color='#b00f17cc'
      />

      <div className='relative top-[-143px]'>
        <ContactForm />
      </div>
    </>
  );
};

export default HomeInsurance;
