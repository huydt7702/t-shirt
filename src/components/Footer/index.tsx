import { Button } from '@nextui-org/react';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import images from 'src/assets/images';
import Image from '../Image';

export default function Footer() {
  return (
    <div>
      <div className='flex gap-6 px-[50px] pb-[55px] pt-10 items-center bg-[#faf8f4]'>
        <div className='grid flex-1 grid-cols-4 mt-12'>
          <div>
            <h3 className='font-bold uppercase'>Shop</h3>
            <ul>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  t-shirt
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  jeans
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  jacket
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  clothing & accessories
                </Link>
              </li>
            </ul>
            <div className='flex mt-[62px] gap-4'>
              <a href='https://www.instagram.com/huydt7702/' target='_blank'>
                <RiInstagramFill />
              </a>
              <a href='https://www.facebook.com/huydt772/' target='_blank'>
                <FaFacebookF />
              </a>
              <a href='https://www.tiktok.com/@huydt7702' target='_blank'>
                <FaTiktok />
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-bold uppercase'>Community</h3>
            <ul>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  about us
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  events
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  the flexfy blog
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  join our reward program
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold uppercase'>Learn</h3>
            <ul>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  fit guide
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  size charts
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  contact us
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  faqs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold uppercase'>Resources</h3>
            <ul>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  returns & exchanges (us)
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  returns (canada)
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  privacy & terms
                </Link>
              </li>
              <li>
                <Link to='#' className='inline-block py-1 text-[#333]'>
                  careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-[410px]'>
          <div className='flex justify-center items-center w-[200px] h-[120px]'>
            <Image src={images.secondLogo} alt='Logo footer' className='w-full' />
          </div>
          <p className='mt-2'>Sign up for ₱50 OFF your first order!</p>
          <div className='flex gap-2 my-2'>
            <input
              type='email'
              placeholder='Email address'
              className='px-3 py-2 rounded-lg border border-solid border-[#333] outline-none'
            />
            <Button className='bg-[#ffb4b4]'>Join</Button>
          </div>
          <p className='text-sm'>
            By signing up. you agree to receive marketing emails from LIVElY. You can unsubscribe any time by clicking
            the link at the bottom of out emails.
          </p>
          <Link to='#' className='text-sm underline text-[#a9a9a9]'>
            Privacy & Terms.
          </Link>
        </div>
      </div>
      <p className='flex justify-center items-center bg-[#ffb4b4] text-xs h-[20px]'>
        © Copyright 2023 FLEXFY / Terms / Privacy
      </p>
      <p className='flex items-center justify-center h-8 text-xs'>Developed by NGUYEN VAN HUY</p>
    </div>
  );
}
