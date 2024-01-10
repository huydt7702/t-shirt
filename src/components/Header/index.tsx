import { Image } from '@nextui-org/react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import images from 'src/assets/images';
import { PATH_PUBLIC } from 'src/routes/path';
import { CartIcon, UserIcon } from '../Icons';
import './styles.css';

export default function Header() {
  const [showHeader, setShowHeader] = useState<boolean>(true);

  useEffect(() => {
    const scrollPosition = 360;

    function handleScroll() {
      const newScrollPosition = window.scrollY;
      newScrollPosition <= scrollPosition && setShowHeader(true);
      scrollPosition < newScrollPosition && setShowHeader(false);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <div
      className={`max-md:border max-md:border-transparent max-md:border-b-[#ededed] flex items-center justify-between bg-white px-5 max-sm:px-3 h-[89px] ${
        !showHeader ? 'fixed z-[999] top-0 left-0 right-0 shadow-[rgba(43,52,69,0.1)_0px_4px_16px] animated-header' : ''
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
        <Image src={images.logo} alt='Logo' className='w-[167px] h-[61px]' />
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
          <UserIcon className='cursor-pointer' />
          <span className='relative'>
            <CartIcon className='cursor-pointer' />
            <span className='absolute bottom-[-6px] right-[-8px] text-sm bg-[#ffceba] rounded-full w-[20px] h-[20px] flex justify-center items-center'>
              0
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
