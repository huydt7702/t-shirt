import { Link } from 'react-router-dom';

interface IListNav {
  label: string;
  path: string;
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

export default function NavBar() {
  return (
    <div className='w-full bg-white h-[44px] flex items-center justify-center uppercase gap-x-12 px-5 border border-transparent border-b-[#ededed]'>
      <p className='inline-block text-sm font-extrabold text-transparent bg-gradient-to-r from-[#fcba93] via-[#baec00] to-[#00f080] bg-clip-text'>
        Summer Vibe Collection <small>2023</small>
      </p>
      {listNav.map((item, index) => (
        <Link key={index} to={item.path} className='text-[#333] text-sm font-bold flex items-center'>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
