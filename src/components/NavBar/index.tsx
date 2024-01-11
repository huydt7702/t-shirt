import { memo } from 'react';
import { Link } from 'react-router-dom';

export interface IListNav {
  label: string;
  path: string;
  style?: string;
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
    path: '#',
    style: 'max-lg:hidden'
  },
  {
    label: 'Clothing & Accessories',
    path: '#',
    style: 'max-[1120px]:hidden'
  },
  {
    label: 'Collections',
    path: '#',
    style: 'max-[1120px]:hidden'
  },
  {
    label: 'Sale',
    path: '#',
    style: 'max-[1120px]:hidden'
  }
];

function NavBar() {
  return (
    <div className='max-md:hidden w-full bg-white h-[44px] flex items-center justify-center uppercase gap-x-12 px-5 border border-transparent border-b-[#ededed]'>
      <p className='inline-block text-sm font-extrabold text-transparent bg-gradient-to-r from-[#fcba93] via-[#baec00] to-[#00f080] bg-clip-text'>
        Summer Vibe Collection <small>2023</small>
      </p>
      {listNav.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`text-[#333] text-sm font-bold flex items-center ${item.style ? item.style : ''}`}
        >
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

const MemoizedNavBar = memo(NavBar);

export default MemoizedNavBar;
