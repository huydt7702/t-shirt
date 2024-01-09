import { Link } from 'react-router-dom';
import { IProduct } from 'src/common';
import formatterPrice from 'src/helpers/formatPrice';
import Image from '../Image';
import RatingStar from '../Rating';

interface IProps {
  data: IProduct;
  view?: 'First' | 'Second';
}

export default function ProductItem({ data, view }: IProps) {
  return (
    <div className='mx-[10px]'>
      <Link to='#' className='block overflow-hidden'>
        <Image src={data.thumbnail} alt={data.name} className='transition duration-500 hover:scale-110' />
      </Link>
      <div className='mx-[6px]'>
        <div className={`flex items-center gap-1 my-2 ${view === 'Second' ? 'justify-center' : ''}`}>
          <RatingStar percentage={data.rating} />
          {view === 'Second' || (
            <p className='text-xs font-bold uppercase text-[#bdbcbc]'>{data.totalReview} Reviews</p>
          )}
        </div>
        <Link to='#'>
          <h3 className={`font-semibold max-h-[48px] line-clamp-2 ${view === 'Second' ? 'text-center' : ''}`}>
            {data.name}
          </h3>
        </Link>
        <p
          className={`my-2 font-bold text-transparent bg-gradient-to-r from-[#ff7eb9] via-[#ffcc00] to-[ #8a2be2] bg-clip-text ${
            view === 'Second' ? 'text-center' : ''
          }`}
        >
          {formatterPrice.format(data.price)}
        </p>
        {view === 'Second' || (
          <div className='flex items-center gap-1'>
            <button className='w-[14px] h-[14px] rounded-full bg-[#d5b59a] border border-solid border-[#333]'></button>
            <button className='w-[14px] h-[14px] rounded-full bg-[#2b292d] border border-solid'></button>
            <button className='w-[14px] h-[14px] rounded-full bg-[#82413f] border border-solid'></button>
          </div>
        )}
        {view === 'Second' && (
          <Link to='#' className='block mt-5 font-bold underline uppercase text-center text-[#333] text-sm'>
            Shop Style
          </Link>
        )}
      </div>
    </div>
  );
}
