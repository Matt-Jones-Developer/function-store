import Image from 'next/image';
import Link from 'next/link';
import { getStore } from '@/sanity/sanity-utils';
import feature from '../../public/assets/png/feature.png';
import doorway1 from '../../public/assets/png/doorway-1.png';
import doorway2 from '../../public/assets/png/doorway-2.png';
import ItemWrapper from '../common/ItemWrapper';
import itemData from '../../data/inventory.json';
import ItemCard from '../common/ItemCard';

// import '../lib/alpinejs';

export default async function Home() {
  const store = await getStore();
  return (
    <>
      {/* these will be component imports */}
      <div className='wrapper animate-fadeIn'>
        <header className='header p-4 py-16 mt-8 text-center relative text-white'>
          <div className='max-w-5xl mx-auto py-64 mt-56'>
            <h1 className='text-8xl font-bold py-10 pb-6'>
              Function<span className='text-indigo-600'>.</span>
            </h1>
            <h2 className=' text-2xl md:text-3xl lg:text-4xl font-bold'>
              more than just code, we&apos;re also in-style
            </h2>
            <p className='md:text-md lg:text-xl'>
              <code>
                you could say we&apos;re &quot;functionally fashionable&quot;
              </code>
            </p>
            <button
              className='py-2 px-4 mt-10 bg-indigo-600 text-white font-bold 
              hover:bg-accent-dark hover:scale-105'
            >
              {/* // x-on:click.prevent="$scroll(document.querySelector('#store'), { offset: -60 }) */}
              SHOP NOW
            </button>
          </div>
          <div className='relative h-screen overflow-hidden'></div>
          <Image
            alt='hero-feature-image'
            src={feature}
            fill
            sizes='100vw'
            placeholder='blur'
            quality={100}
            className='absolute top-0 left-0 w-full h-full object-cover -z-10 transform hover:scale-105'
          />
        </header>
        <main className='main mt-16'>
          <div className='flex justify-between items-center m-8'>
            <h2 className='text-3xl font-light text-gray-800 tracking-wider'>
              Best Sellers
            </h2>
            {/* re-usable component TODO */}
            <div className=' shopAll flex justify-end'>
              <div className='border-2 border-gray-300 p-4'>
                <h3>Shop All</h3>
              </div>
              <div className='border-2 border-gray-300 border-l-0 p-4'>
                <Image
                  // todo - sort the svg colour swaps!
                  src='/assets/icons/right-arrow-black.svg'
                  alt='right arrow icon'
                  width={15}
                  height={15}
                  className='arrow ml-1'
                  style={{ fill: 'var(--arrow-color)' }}
                />
              </div>
            </div>
          </div>
          <div className='mt-6 m-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
            {store.map((store) => (
              <div key={store._id}>
                <Link href={`/store/${store.slug}`}>
                  {store.image && (
                    <Image
                      src={store.image}
                      alt={store.name}
                      width={750}
                      height={300}
                      className='object-cover border border-gray-500 mb-4'
                    />
                  )}
                  {/* <div className='font-light'>{store.name}</div> */}
                </Link>
                <div className='w-full mx-auto'>
                  {itemData
                    .filter((item) => item.name === store.name)
                    .map((item, i) => (
                      <div key={`card-${i}`} className='w-full mx-auto'>
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
          <div className='mt-16 max-w-full mx-24'>
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
                  <h2 className='font-light text-gray-800 text-3xl mb-8 tracking-wider'>
                    The Casual Edit
                  </h2>
                  <p className='font-light text-gray-600'>
                    Nulla aliquip deserunt enim reprehenderit sit esse sunt duis
                    id nisi aliqua est sint. Ipsum ea elit aliqua dolor est
                    mollit ipsum cillum. Tempor pariatur adipisicing cillum
                    laborum sunt. Excepteur officia laboris quis id labore et
                    cillum minim dolore aute incididunt ea. Esse cupidatat et
                    esse deserunt pariatur id nostrud nulla adipisicing laborum
                    occaecat anim eu do.
                  </p>
                  <div className='mt-4 shopAll flex justify-start'>
                    <div className='border-2 border-gray-300 p-4'>
                      <h3>Shop All</h3>
                    </div>
                    <div className='border-2 border-gray-300 border-l-0 p-4'>
                      <Image
                        // todo - sort the svg colour swaps!
                        src='/assets/icons/right-arrow-black.svg'
                        alt='right arrow icon'
                        width={15}
                        height={15}
                        className='arrow ml-1'
                        style={{ fill: 'var(--arrow-color)' }}
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
                  <h2 className='font-light text-gray-800 text-3xl mb-8 tracking-wider'>
                    The Denim Edit
                  </h2>
                  <p className='font-light text-gray-600'>
                    Nulla aliquip deserunt enim reprehenderit sit esse sunt duis
                    id nisi aliqua est sint. Ipsum ea elit aliqua dolor est
                    mollit ipsum cillum. Tempor pariatur adipisicing cillum
                    laborum sunt. Excepteur officia laboris quis id labore et
                    cillum minim dolore aute incididunt ea. Esse cupidatat et
                    esse deserunt pariatur id nostrud nulla adipisicing laborum
                    occaecat anim eu do.
                  </p>
                  <div className='mt-4 shopAll flex justify-start'>
                    <div className='border-2 border-gray-300 p-4'>
                      <h3>Shop All</h3>
                    </div>
                    <div className='border-2 border-gray-300 border-l-0 p-4'>
                      <Image
                        // todo - sort the svg colour swaps!
                        src='/assets/icons/right-arrow-black.svg'
                        alt='right arrow icon'
                        width={15}
                        height={15}
                        className='arrow ml-1'
                        style={{ fill: 'var(--arrow-color)' }}
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
            bg-green-950 font-light py-20 mt-16 m-0'
          >
            <h2 className='text-6xl text-white text-center font-extralight'>
              Get your gifts in time for the holidays
            </h2>
            <p className='text-white text-opacity-50 mt-6 text-3xl'>
              Free, extended returns until January 20th
            </p>
            <div className='mt-8 shopAll flex justify-start'>
              <div className='border border-gray-300 p-6'>
                <h3 className='text-white text-2xl'>Learn More</h3>
              </div>
              <div className='border border-gray-300 border-l-0 p-4'>
                <Image
                  // todo - sort the svg colour swaps!
                  src='/assets/icons/right-arrow.svg'
                  alt='right arrow icon'
                  width={15}
                  height={15}
                  className='arrow ml-1 mt-3'
                  style={{ fill: 'var(--arrow-color)' }}
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
              justify-center w-full mx-auto justify-items-center max-w-5xl'
          >
            <div className='footer__account w-full lg:w-1/3'>
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
            {/* company column */}
            <div className='footer__company w-full lg:w-1/3'>
              <h2 className='text-2xl tracking-wide font-extralight mb-6'>
                Company
              </h2>
              <ul className='footer-items text-opacity-50'>
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
            <div className='footer__help w-full lg:w-1/3'>
              <h2 className='text-2xl tracking-wide font-extralight mb-6'>
                Get Help
              </h2>
              <ul className='footer-items text-opacity-50'>
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
          </div>
          <div className='footer__bottom flex justify-around gap-8 items-center pt-16'>
            <p>&copy; Function 2023</p>
            <Link href='/'>Sitemap</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
