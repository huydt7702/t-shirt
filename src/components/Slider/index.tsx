import { Button } from '@nextui-org/react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import images from 'src/assets/images';

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

  return (
    <div className='max-md:hidden'>
      <Slide arrows={false}>
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
