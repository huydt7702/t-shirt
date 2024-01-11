import { Button } from '@nextui-org/react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import images from 'src/assets/images';
import './styles.css';

export default function Slider() {
  const slides = [
    {
      id: 1,
      image: images.slide1
    },
    {
      id: 2,
      image: images.slide2
    },
    {
      id: 3,
      image: images.slide3
    }
  ];

  const renderDotted = () => (
    <div className='indicator'>
      <div className='relative border border-solid border-[#ffa0a0] w-[16px] h-[16px] rounded-full m-[0.25rem] cursor-pointer '></div>
    </div>
  );

  return (
    <div className='relative max-md:hidden boxSlide'>
      <Slide indicators={() => renderDotted()} arrows={false}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            style={{
              backgroundImage: `url(${slide.image})`
            }}
            className='relative bg-cover bg-no-repeat bg-center h-[460px] w-full'
          >
            <Button className='absolute bottom-[40px] right-[150px] bg-white font-bold min-w-[120px]'>Shop Sale</Button>
          </div>
        ))}
      </Slide>
    </div>
  );
}
