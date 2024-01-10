import { FaArrowUp } from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from 'src/components/Header';
import TopBar from 'src/components/TopBar';
import Footer from '../Footer';
import NavBar from '../NavBar';

export default function Layout() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className='relative'>
      <TopBar />
      <Header />
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
      <button
        className={`fixed bottom-16 right-2 z-[500] flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#ff7eb9] to-[#ffcc00] rounded-full hover:opacity-80 transition-all ${
          scrollY >= 1200 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleScrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
