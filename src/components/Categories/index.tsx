import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { Category } from 'src/common';
import Image from '../Image';
import SlideProduct from '../SlideProduct';

interface IProps {
  data: Category[];
  title: string;
}

export default function Categories({ data, title }: IProps) {
  return (
    <div className='mx-[60px]'>
      <div className='flex items-center gap-5 mt-16 mb-8 text-xl'>
        <h3 className='font-bold'>{title}</h3>
      </div>
      {data.length > 0 && (
        <SlideProduct slidesToShow={5}>
          {data.map((category) => (
            <div key={category.id} className='relative mx-[10px] flex justify-center'>
              <Link to='#' className='block w-full overflow-hidden'>
                <Image
                  src={category.thumbnail}
                  alt={category.name}
                  className='w-full h-[240px] transition duration-500 hover:scale-110'
                />
              </Link>
              <Button className='absolute bottom-4 left-5 bg-white text-[#333] min-w-[100px] font-bold'>
                {category.name}
              </Button>
            </div>
          ))}
        </SlideProduct>
      )}
    </div>
  );
}
