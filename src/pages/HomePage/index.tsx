import { Button } from '@nextui-org/react';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import { Category } from 'src/common';
import Categories from 'src/components/Categories';
import Products from 'src/components/Products';
import Slider from 'src/components/Slider';
import { useGetBestSellingProducts, useGetDiscountedProducts } from 'src/queries/products';

const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Shop Now',
    thumbnail:
      'https://hooke.ca/cdn/shop/files/HOOKE-WOMEN-LANDSCAPE-LONG-SLEEVE-TEE-HGR-3.webp?v=1689792816&width=2500'
  },
  {
    id: '2',
    name: 'T-Shirt',
    thumbnail: 'https://images.teemill.com/pfgv1e33rcbxh4p0089irczibtaqy9kq8zwyustddrpv8t3b.jpeg.jpg?w=1080&h=1080&v=2'
  },
  {
    id: '3',
    name: 'T-Shirt',
    thumbnail: 'https://bizweb.dktcdn.net/100/438/626/products/106f1e44-82a2-442d-8556-331df127e468.jpg?v=1678201093440'
  },
  {
    id: '4',
    name: 'SALES 50%',
    thumbnail: 'https://i.etsystatic.com/43848892/r/il/ecb2ba/5494026159/il_300x300.5494026159_61yy.jpg'
  },
  {
    id: '5',
    name: 'T-Shirt',
    thumbnail:
      'https://c-static.smartphoto.com/structured/repositoryimage/productcategory/fun_ideas/tshirtmen/topimages/0017/image/carrousel_2.jpg'
  }
];

const IMAGES = [
  {
    id: '1',
    url: 'https://cdnphoto.dantri.com.vn/VL631MdFUp89ZdcRbwe4xXtqrY4=/thumb_w/1020/2023/07/21/charlie-puth-13-1689910856013.jpg'
  },
  {
    id: '2',
    url: 'https://www.grazia.it/content/uploads/2016/01/Charlie-Puth-g.jpg'
  },
  {
    id: '3',
    url: 'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/3/81/381abed4-0b06-11ee-94f6-0f12ebe91387/648a44cf643a5.image.jpg?resize=1200%2C800'
  },
  {
    id: '4',
    url: 'https://mmo.aiircdn.com/265/64acda087b8b2.jpg'
  }
];

function HomePage() {
  const { products: listBestSellingProduct } = useGetBestSellingProducts();
  const { products: listDiscountedProduct } = useGetDiscountedProducts();

  return (
    <div>
      <Slider />
      <Products data={listBestSellingProduct} title='Best Sellers' buttonTitle='Shop Now' />
      <Products data={listDiscountedProduct} title='Up to 30% Off' buttonTitle='Shop Bras' />
      <Categories data={CATEGORIES} title='15% Off Top Categories' />

      <div className='flex mt-16'>
        <div
          style={{
            position: 'relative',
            backgroundImage:
              'url(https://imagenes.elpais.com/resizer/PIVu0F-3YdE-hugNw45MFhPLwC0=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/753UNHEGPNGBRP3CT5FF425PBI.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '460px',
            width: '100%'
          }}
        >
          <Button className='absolute bottom-10 left-5 bg-white text-[#333] min-w-[120px] font-bold'>
            New arrival
          </Button>
        </div>
        <div
          style={{
            position: 'relative',
            backgroundImage:
              'url(https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_45/1628744/justin-bieber-kb-main-201102.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '460px',
            width: '100%'
          }}
        >
          <Button className='absolute bottom-10 right-5 bg-white text-[#333] min-w-[120px] font-bold'>Beanie</Button>
        </div>
      </div>

      <Products data={listDiscountedProduct} title='Our Crew is Raving' view='Second' />

      <div className='flex mt-16'>
        <div className='relative bg-[#ffe2b1] h-[400px] w-full'>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
            <h3 className='text-3xl font-bold'>Promotion for Member</h3>
            <p className='mt-2 mb-4'>Sign up now and get ₱50 coupon</p>
            <Button className='bg-white text-[#333] min-w-[140px] font-bold'>Join rewards</Button>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            backgroundImage:
              'url(https://www.105.net/resizer/1000/683/true/1528450132458.jpg--justin_bieber_denunciato_per_rissa_e_insulti_razziali.jpg?1528450133479)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            width: '100%'
          }}
        ></div>
      </div>

      <div className='flex items-center justify-between px-7'>
        <div className='flex items-center gap-5 my-8'>
          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic'
            }}
            className='text-2xl'
          >
            Join the community
          </h3>
          <Button className='bg-[#ffacb2] text-[#333] min-w-[140px] font-bold'>Become our KOLs</Button>
        </div>
        <div className='flex gap-3'>
          <button className='bg-[#ffacb2] h-[32px] w-[32px] rounded-lg'>
            <a href='https://www.instagram.com/huydt7702/' target='_blank'>
              <FaInstagram className='w-full h-full p-[4px]' />
            </a>
          </button>
          <button className='bg-[#ffacb2] h-[32px] w-[32px] rounded-lg'>
            <a href='https://www.tiktok.com/@huydt7702' target='_blank'>
              <FaTiktok className='w-full h-full p-[4px]' />
            </a>
          </button>
        </div>
      </div>

      <div className='flex'>
        {IMAGES.map((image) => (
          <div
            key={image.id}
            style={{
              position: 'relative',
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '330px',
              width: '100%',
              borderRight: '2px solid #fff'
            }}
          ></div>
        ))}
      </div>

      <div className='bg-[#ffb4b4] text-center py-10'>
        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic'
          }}
          className='text-3xl'
        >
          Confidence from within
        </h3>
        <p className='mt-6 mb-8'>Post your pictures on your instagram or facebook with hashtag #flexfy</p>
        <Button className='bg-white text-[#333] min-w-[140px] font-bold'>About us</Button>
      </div>
    </div>
  );
}

export const Component = HomePage;
