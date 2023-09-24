import AboutUs from '@/components/AboutUs/AboutUs';
// import MainNav from '@/components/NormalNav/MainNav';
// import TopNav from '@/components/NormalNav/TopNav';
import React from 'react';

const AboutUsPage = () => {
  return (
      <div className=' relative top-[-165px]'
        style={{
          background: `#62B1BCCC`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <AboutUs />
    </div>
  );
};

export default AboutUsPage;
