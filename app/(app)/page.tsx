import { getStore } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import doorway1 from '../../public/assets/png/doorway-1.png';
import doorway2 from '../../public/assets/png/doorway-2.png';
import itemData from '../../data/inventory.json';
import ItemCard from './common/ItemCard';
import Header from './components/header';

// import '../lib/alpinejs';

export default async function Home() {
  const store = await getStore();

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* these will be component imports */}
      {/* header */}
      <Header isFullScreen={false} />
      {/* main content */}
      <main className='main mt-24 md:mt-16'>
        <div className='flex justify-between items-center m-8'>
          <h2 className=' sub-heading text-3xl font-light text-gray-800 tracking-wider'>
            Best Sellers
          </h2>
          {/* re-usable component TODO */}
          <div className=' shopAll flex justify-end'>
            <div className='border-2 border-gray-300 p-4'>
              <h3>Shop All</h3>
            </div>
            <div className='border-2 border-gray-300 border-l-0 p-4'>
              <Image
                style={{
                  position: 'relative',
                  width: '16px',
                  height: '16px',
                }}
                src='/assets/icons/right-arrow-black.svg'
                alt='right arrow icon'
                width={16}
                height={16}
                className='arrow ml-1 mt-1 hover:scale-105'
              />
            </div>
          </div>
        </div>
        {/* store front area - best sellers
        products are stored within /admin backend which can be edited and added to
        they are then dynamically rendered per product item */}
        <div className='mt-6 m-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
          {store.map((store) => (
            <div key={store._id}>
              <Link href={`/store/${store.slug}`} className='products'>
                {store.image && (
                  <Image
                    src={store.image}
                    alt={store.name}
                    width={750}
                    height={300}
                    className='border border-gray-500 mb-4'
                  />
                )}
                {/* <div className='font-light'>{store.name}</div> */}
              </Link>
              {/* import ItemCards - dynamically access product img and data */}
              <div className='w-full mx-auto border-2 p-4'>
                {itemData
                  .filter((item) => item.name === store.name)
                  .map((item, i) => (
                    <div key={`card-${i}`} className='w-full mx-auto'>
                      {/* import ItemCard */}
                      <ItemCard
                        index={i}
                        {...item}
                        price={Number(item.price)}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        {/* doorway container */}
        <div className='mt-16 max-w-full mx-8 md:mx-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center'>
              <Image
                src={doorway1}
                alt='doorway-image-casual-brown-jacket'
                width={850}
                height={300}
                className='object-cover mb-2'
              />
              <div className='flex-grow mt-8'>
                <h2 className=' sub-heading font-light text-gray-800 text-3xl mb-8 tracking-wider'>
                  The Casual Edit
                </h2>
                <p className='text font-light text-gray-600 pb-4'>
                  Nulla aliquip deserunt enim reprehenderit sit esse sunt duis
                  id nisi aliqua est sint. Ipsum ea elit aliqua dolor est mollit
                  ipsum cillum. Tempor pariatur adipisicing cillum laborum sunt.
                  Excepteur officia laboris quis id labore et cillum minim
                  dolore aute incididunt ea. Esse cupidatat et esse deserunt
                  pariatur id nostrud nulla adipisicing laborum occaecat anim eu
                  do.
                </p>
                <div className='mt-4 shopAll flex justify-start'>
                  <div className='border-2 border-gray-300 p-4'>
                    <h3>Shop All</h3>
                  </div>
                  <div className='border-2 border-gray-300 border-l-0 p-4'>
                    <Image
                      src='/assets/icons/right-arrow-black.svg'
                      alt='right arrow icon'
                      width={24}
                      height={24}
                      className='arrow ml-1 hover:scale-105'
                      style={{
                        fill: 'var(--arrow-color)',
                        position: 'relative',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <Image
                src={doorway2}
                alt='doorway-image-blue-hoodie-denim-jeans'
                width={850}
                height={300}
                className='object-cover mb-2'
              />
              <div className='flex-grow mt-8'>
                <h2 className='sub-heading font-light text-gray-800 text-3xl mb-8 tracking-wider'>
                  The Denim Edit
                </h2>
                <p className='text font-light text-gray-600 pb-4'>
                  Nulla aliquip deserunt enim reprehenderit sit esse sunt duis
                  id nisi aliqua est sint. Ipsum ea elit aliqua dolor est mollit
                  ipsum cillum. Tempor pariatur adipisicing cillum laborum sunt.
                  Excepteur officia laboris quis id labore et cillum minim
                  dolore aute incididunt ea. Esse cupidatat et esse deserunt
                  pariatur id nostrud nulla adipisicing laborum occaecat anim eu
                  do.
                </p>
                <div className='mt-4 shopAll flex justify-start'>
                  <div className='border-2 border-gray-300 p-4'>
                    <h3>Shop All</h3>
                  </div>
                  <div className='border-2 border-gray-300 border-l-0 p-4'>
                    <Image
                      src='/assets/icons/right-arrow-black.svg'
                      alt='right arrow icon'
                      width={24}
                      height={24}
                      className='arrow ml-1 hover:scale-105'
                      style={{
                        fill: 'var(--arrow-color)',
                        position: 'relative',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* gift section (racing green div) */}
        <div
          className='gift flex flex-col justify-between items-center mx-auto
            bg-green-950 font-light py-20 m-0 mt-20 md:mt-16 text-center'
        >
          <h2 className='text-4xl md:text-6xl text-white font-extralight max-w-sm md:max-w-5xl'>
            Get your gifts in time for the holidays
          </h2>
          <p className='text-white text-opacity-50 mt-6 text-xl md:text-3xl'>
            Free, extended returns until January 20th
          </p>
          {/* large white shop-all */}
          <div className='mt-8 shopAll flex justify-start'>
            <div className='border border-gray-300 p-4 md:p-6'>
              <h3 className='text-white  text-xl md:text-2xl mt-4 md:mt-2'>
                Learn More
              </h3>
            </div>
            <div className='border border-gray-300 border-l-0 p-6'>
              <Image
                src='/assets/icons/right-arrow.svg'
                alt='right arrow white icon'
                width={48}
                height={48}
                className='arrow-lg ml-1 sm:w-4 sm:h-4 hover:scale-105'
                style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                }}
              />
            </div>
          </div>
        </div>
      </main>
      {/* footer gray-800 */}
      <footer
        className='footer flex flex-col justify-center items-center mx-auto
            bg-gray-800 text-white font-light py-20 m-0 gap-16'
      >
        {/* footer top cols */}
        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
              justify-center justify-items-center w-full mx-auto 
              max-w-5xl mt-0 md:m-0 ml-8'
        >
          {/* company column */}
          <div className='footer__company w-full lg:w-1/3 mx-0'>
            <h2 className='text-2xl tracking-wide font-extralight mb-6'>
              Company
            </h2>
            <ul className='footer-items text-opacity-50 mb-8'>
              <li>
                <Link href='/'>VIP Lounge Rewards</Link>
              </li>
              <li>
                <Link href='/'>Reviews</Link>
              </li>
              <li>
                <Link href='/'>Sustainability</Link>
              </li>
              <li>
                <Link href='/'>Recycling Scheme</Link>
              </li>
              <li>
                <Link href='/'>About Us</Link>
              </li>
              <li>
                <Link href='/'>Become an Affiliate</Link>
              </li>
              <li>
                <Link href='/'>Careers</Link>
              </li>
              <li>
                <Link href='/'>Stockists</Link>
              </li>
            </ul>
          </div>
          {/* Get Help column */}
          <div className='footer__help w-full lg:w-1/3 mx-0'>
            <h2 className='text-2xl tracking-wide font-extralight mb-6'>
              Get Help
            </h2>
            <ul className='footer-items text-opacity-50 mb-8'>
              <li>
                <Link href='/'>Contact Us</Link>
              </li>
              <li>
                <Link href='/'>FAQs</Link>
              </li>
              <li>
                <Link href='/'>Shipping Information</Link>
              </li>
              <li>
                <Link href='/'>Return Policy</Link>
              </li>
            </ul>
          </div>
          {/* account column */}
          <div className='footer__account w-full lg:w-1/3 mx-0'>
            <h2 className='text-2xl tracking-wide font-extralight mb-6'>
              Account
            </h2>
            <ul className='footer-items text-opacity-50'>
              <li>
                <Link href='/'>Login</Link>
              </li>
              <li>
                <Link href='/'>Signup</Link>
              </li>
              <li>
                <Link href='/'>Redeem a Gift Card</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='relative flex flex-nowrap justify-center w-full mx-auto'>
          <div className='absolute flex footer__bottom gap-4 items-center bottom-0'>
            <p>&copy; Function 2023</p>
            <Link className='map' href='/'>
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
