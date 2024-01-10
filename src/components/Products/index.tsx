import { Button } from '@nextui-org/react';
import { IProduct } from 'src/common';
import ProductItem from '../ProductItem';
import SlideProduct from '../SlideProduct';

interface IProps {
  data: IProduct[];
  title: string;
  buttonTitle?: string;
  view?: 'First' | 'Second';
}

export default function Products({ data, title, buttonTitle, view }: IProps) {
  return (
    <div className='mx-[60px] max-sm:mx-3 max-lg:mx-6'>
      <div className='flex items-center gap-5 mt-16 mb-8 text-xl max-sm:mt-10 max-sm:mb-4'>
        <h3 className='font-bold ml-[10px]'>{title}</h3>
        {buttonTitle && <Button className='bg-[#ffb4b4] min-w-[120px] font-semibold'>{buttonTitle}</Button>}
      </div>
      {data.length > 0 && (
        <SlideProduct slidesToShow={5}>
          {data.map((product) => (
            <ProductItem key={product.id} data={product} view={view} />
          ))}
        </SlideProduct>
      )}
    </div>
  );
}
