import { memo, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HiMiniBars3 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import { PATH_PUBLIC } from 'src/routes/path';
import { CartIcon, Logo, UserIcon } from '../Icons';
import Sidebar from './Sidebar';
import './styles.css';

function Header() {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    const scrollPosition = 360;

    function handleScroll() {
      const newScrollPosition = window.scrollY;
      newScrollPosition <= scrollPosition && setShowHeader(true);
      scrollPosition < newScrollPosition && setShowHeader(false);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`max-md:border-b max-md:border-solid max-md:border-b-[#ededed] flex items-center justify-between bg-white px-5 max-sm:px-3 h-[89px] ${
        !showHeader ? 'fixed z-[99] top-0 left-0 right-0 shadow-[rgba(43,52,69,0.1)_0px_4px_16px] animated-header' : ''
      }`}
    >
      <ul className='flex gap-6 max-md:hidden'>
        <li>
          <Link to='#'>rewards</Link>
        </li>
        <li>
          <Link to='#'>fit guide</Link>
        </li>
      </ul>

      <Link to={PATH_PUBLIC.home}>
        <Logo className='rectBackground' />
      </Link>

      <div className='flex items-center'>
        <div className='relative flex items-center mr-3 max-sm:hidden'>
          <input
            type='text'
            placeholder='search'
            className='bg-[#f3f3f3] py-1 pl-3 pr-8 rounded-[4px] w-[220px] outline-none placeholder:text-[#333]'
          />
          <BsSearch className='absolute right-2 top-[50%] translate-y-[-50%]' />
        </div>
        <div className='flex items-center gap-3'>
          <button>
            <UserIcon />
          </button>
          <button className='relative bottom-[-1px]'>
            <CartIcon />
            <span className='absolute bottom-[-3px] right-[-6px] text-xs bg-[#ffceba] rounded-full w-[16px] h-[16px] flex justify-center items-center'>
              3
            </span>
          </button>
          <button className='scale-[130%] lg:hidden' onClick={() => setIsShowSidebar(true)}>
            <HiMiniBars3 />
          </button>
          <Sidebar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar} />
        </div>
      </div>
    </header>
  );
}

const MemoizedHeader = memo(Header);

export default MemoizedHeader;
