import { Image } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HiMiniBars3 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import images from 'src/assets/images';
import { IListNav } from 'src/components/NavBar';
import { PATH_PUBLIC } from 'src/routes/path';
import '../styles.css';

interface IProps {
  isShowSidebar: boolean;
  setIsShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const listNav: IListNav[] = [
  { label: 'New', path: '#' },
  {
    label: 'Best Sellers',
    path: '#'
  },
  {
    label: 'Shirts',
    path: '#'
  },
  {
    label: 'Jeans',
    path: '#'
  },
  {
    label: 'Jacket',
    path: '#'
  },
  {
    label: 'Clothing & Accessories',
    path: '#'
  },
  {
    label: 'Collections',
    path: '#'
  },
  {
    label: 'Sale',
    path: '#'
  }
];

const rootElement = document.getElementById('root') as Element;

export default function Sidebar({ isShowSidebar, setIsShowSidebar }: IProps) {
  useEffect(() => {
    if (!isShowSidebar) return;

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isShowSidebar]);

  return (
    <React.Fragment>
      {createPortal(
        <nav
          className={`fixed right-0 top-0 bottom-0 max-sm:min-w-full max-lg:min-w-[320px] bg-white z-[999] transition-transform ${
            isShowSidebar ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <header className='flex items-center justify-between p-3 border-b border-solid border-[#ededed]'>
            <Link to={PATH_PUBLIC.home}>
              <Image src={images.logo} alt='Logo' className='w-[167px] h-[61px]' />
            </Link>
            <button
              className='flex justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-background'
              onClick={() => setIsShowSidebar(false)}
            >
              <HiMiniBars3 className='scale-125' />
            </button>
          </header>
          <ul className='mt-4'>
            {listNav.map((item, key) => (
              <li key={key}>
                <Link
                  to={item.path}
                  className='block text-center p-3 font-semibold hover:bg-[rgba(0,0,0,0.05)] transition-background'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>,
        rootElement
      )}
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] z-[900] ${
          isShowSidebar ? 'overlay-sidebar' : 'hidden'
        }`}
        onClick={() => setIsShowSidebar(false)}
      ></div>
    </React.Fragment>
  );
}
