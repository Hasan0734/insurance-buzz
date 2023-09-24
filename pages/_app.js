import MainFooter from '@/components/Footer/MainFooter';
import Prefooter from '@/components/Footer/Prefooter';
import MainNav from '@/components/Navbar/MainNav';
import TopNav from '@/components/Navbar/TopNav';
import styles from '@/styles/navbar.module.css';
import '@/styles/globals.css';
import '@/styles/anchor.css';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const CrispWithNoSSR = dynamic(
  () => import('../components/CrispChat/CrispChat'),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  const [sticky, setSticky] = useState(false);

  const router = useRouter();
  const isResourcesPage = router.pathname === '/resources';

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

  return (
    <>
      <div className={`${sticky ? styles.sticky : styles.notSticky} `}>
        <TopNav />
        <MainNav />
      </div>
      <FloatingWhatsApp phoneNumber='+16474698766' accountName=' Vidya Kittur' avatar='/images/new/vidya-pic.png'/>
      {/* <CrispWithNoSSR /> */}
      <Component {...pageProps} />
      {!isResourcesPage && (
        <div>
          <Prefooter />
          <MainFooter />
        </div>
      )}
    </>
  );
}
