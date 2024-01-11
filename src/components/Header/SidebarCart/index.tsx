import React, { memo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';

import { IProduct } from 'src/common';
import { CartIcon } from 'src/components/Icons';
import Image from 'src/components/Image';
import formatterPrice from 'src/helpers/formatPrice';
import '../styles.css';

interface IProps {
  isShowSidebar: boolean;
  setIsShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IProductCart extends IProduct {
  quantity: number;
}

const listProductCart: IProductCart[] = [
  {
    createdAt: '2024-01-07T18:50:39.635Z',
    name: 'Áo Thun Tshirt Nam Nữ Unisex Chất Vải Thun Nhà Bao Việc',
    price: 42000,
    color: ['Red', 'Green', 'Blue'],
    totalReview: 84,
    rating: 4.5,
    thumbnail: 'https://down-vn.img.susercontent.com/file/fdabcb4e5506bf688f602bda272cc8d2',
    size: ['M', 'L', 'XL'],
    id: '1',
    quantity: 2
  },
  {
    createdAt: '2024-01-08T06:12:59.052Z',
    name: 'Áo Thun Tshirt Nữ Nam Unisex Chất Vải Thun Cotton Thỏ Vũ Trụ',
    price: 430500,
    color: ['Red', 'Green', 'Blue'],
    totalReview: 931,
    rating: 4.9,
    thumbnail: 'https://down-vn.img.susercontent.com/file/e2cb77b0626be1890d55cf50ed9e6c79',
    size: ['M', 'L', 'XL'],
    id: '2',
    quantity: 3
  },
  {
    createdAt: '2024-01-07T18:50:39.635Z',
    name: 'Áo Thun Tshirt Nữ Nam Unisex Chất Vải Thun Cotton Bươm Bướm',
    price: 78000,
    color: ['Red', 'Green', 'Blue'],
    totalReview: 24,
    rating: 3.8,
    thumbnail: 'https://down-vn.img.susercontent.com/file/042d8952f086ebd812d5c32fa81a53b4',
    size: ['M', 'L', 'XL'],
    id: '3',
    quantity: 1
  },
  {
    createdAt: '2024-01-07T18:50:39.635Z',
    name: 'Áo thun form rộng Paradox tay lỡ - Unisex - In hình - THE REVERIE',
    price: 118600,
    color: ['Red', 'Green', 'Blue'],
    totalReview: 29,
    rating: 4,
    thumbnail: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq06lsaox0s735',
    size: ['M', 'L', 'XL'],
    id: '4',
    quantity: 5
  },
  {
    createdAt: '2024-01-08T06:12:59.052Z',
    name: 'Áo Thun Cổ Tròn Tshirt Nữ Nam Unisex Chất Vải Thun Cotton Khủng Long Trăng MAT 012',
    price: 118000,
    color: ['Red', 'Green', 'Blue'],
    totalReview: 90,
    rating: 4.5,
    thumbnail: 'https://down-vn.img.susercontent.com/file/vn-11134211-23030-nw4838dyceov21',
    size: ['M', 'L', 'XL'],
    id: '5',
    quantity: 2
  },
  {
    createdAt: '2024-01-07T18:50:39.635Z',
    name: 'Nữ và nam cỡ lớn tay ngắn cổ tròn t-shirt rời couple top',
    price: 133000,
    color: ['Red', 'Green', 'Blue'],
    totalReview: 34,
    rating: 5,
    thumbnail: 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvg0-ljz8h6x4dnsn7e',
    size: ['M', 'L', 'XL'],
    id: '6',
    quantity: 6
  },
  {
    createdAt: '2024-01-07T18:50:39.635Z',
    name: 'Áo thun nam OVERSIZE T Shirt Basic TB23',
    price: 250000,
    color: ['Red', 'Green', 'Blue'],
    totalReview: 45,
    rating: 4,
    thumbnail: 'https://down-vn.img.susercontent.com/file/vn-11134207-23010-4x1uzwh3wwlv0b',
    size: ['M', 'L', 'XL'],
    id: '7',
    quantity: 3
  }
];

const rootElement = document.getElementById('root') as Element;

function SidebarCart({ isShowSidebar, setIsShowSidebar }: IProps) {
  useEffect(() => {
    if (!isShowSidebar) return;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '16px';

    return () => {
      document.body.style.overflow = 'scroll';
      document.body.style.paddingRight = '0px';
    };
  }, [isShowSidebar]);

  return (
    <React.Fragment>
      {createPortal(
        <nav
          className={`fixed right-0 top-0 bottom-0 max-sm:w-full w-[360px] bg-white z-[999] transition-transform ${
            isShowSidebar ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <header className='flex items-center justify-between p-3 border-b border-solid border-[#ededed] h-[86px]'>
            <span className='flex items-center gap-3 ml-3'>
              <CartIcon />
              {'7 items'}
            </span>
            <button
              className='flex justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-background'
              onClick={() => setIsShowSidebar(false)}
            >
              <GrClose className='scale-110 opacity-80' />
            </button>
          </header>
          <ul className='h-[calc(100vh-166px)] overflow-y-auto scrollbar-sidebar'>
            {listProductCart.map((item) => (
              <li key={item.id} className='flex items-center gap-4 px-5 py-4'>
                <Link to='#' className='shrink-0'>
                  <Image src={item.thumbnail} alt={item.name} className='w-[76px] h-[76px] rounded-full' />
                </Link>
                <div>
                  <Link to='#'>
                    <h3 className={`font-semibold max-h-[48px] line-clamp-2`}>{item.name}</h3>
                  </Link>
                  <p className='mt-1 text-[#7d879c] text-xs'>
                    {formatterPrice.format(item.price)} × {item.quantity}
                  </p>
                  <p className='mt-1 text-sm font-bold text-transparent bg-gradient-to-r from-[#ff7eb9] via-[#ffcc00] to-[ #8a2be2] bg-clip-text'>
                    {formatterPrice.format(item.price * item.quantity)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className='absolute bottom-0 left-0 right-0 h-[80px] border-t border-solid border-[#ededed] flex items-center justify-center bg-white'>
            <Button className='border font-bold bg-white border-solid border-[#fb9191] rounded-lg text-[#333] w-[90%]'>
              View Cart
            </Button>
          </div>
        </nav>,
        rootElement
      )}
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] z-[900] ${
          isShowSidebar ? 'overlay-sidebar' : 'hidden'
        }`}
        onClick={() => setIsShowSidebar(false)}
      ></div>
    </React.Fragment>
  );
}

const MemoizedSidebarCart = memo(SidebarCart);

export default MemoizedSidebarCart;
