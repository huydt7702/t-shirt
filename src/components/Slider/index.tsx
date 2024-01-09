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
    <Slide arrows={false}>
      {slides.map((slide) => (
        <div
          key={slide.id}
          style={{
            position: 'relative',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '460px',
            width: '100%'
          }}
        >
          <Button className='absolute bottom-[40px] right-[150px] bg-white font-bold min-w-[120px]'>Shop Sale</Button>
        </div>
      ))}
    </Slide>
  );
}
