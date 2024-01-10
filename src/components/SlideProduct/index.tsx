import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { IoArrowForward } from 'react-icons/io5';
import { IoArrowBackOutline } from 'react-icons/io5';

interface ISlideProductsType {
  children: JSX.Element | JSX.Element[];
  slidesToShow: number;
  autoplay?: boolean;
  arrows?: boolean;
}

export default function SlideProduct({
  children,
  autoplay = false,
  slidesToShow = 4,
  arrows = true
}: ISlideProductsType) {
  return (
    <Slide
      arrows={arrows}
      slidesToScroll={1}
      slidesToShow={1}
      autoplay={autoplay}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: slidesToShow,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]}
      nextArrow={
        <button className='flex justify-center items-center w-[30px] min-w-[30px] h-[40px] text-white bg-[#222] hover:bg-opacity-80'>
          <IoArrowForward />
        </button>
      }
      prevArrow={
        <button className='flex justify-center items-center w-[30px] min-w-[30px] h-[40px] text-white bg-[#222] hover:bg-opacity-80'>
          <IoArrowBackOutline />
        </button>
      }
    >
      {children}
    </Slide>
  );
}
