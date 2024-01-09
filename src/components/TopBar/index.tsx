import { IoIosArrowForward } from 'react-icons/io';

export default function TopBar() {
  return (
    <div className='h-[30px] flex relative justify-center items-center bg-gradient-to-r from-[#ffb4b4] to-[#7e8bff]'>
      <p className='text-sm text-[#333]'>
        Sign up now and get <strong>$50</strong> coupon
      </p>
      <IoIosArrowForward className='absolute top-[50%] translate-y-[-50%] right-1 cursor-pointer text-white' />
    </div>
  );
}
