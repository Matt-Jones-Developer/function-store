'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import feature from '@/public/assets/png/feature.png';

interface Props {
  isFullScreen: boolean;
}
const Header = ({ isFullScreen }: Props) => {
  const [isFullScreenState, setIsFullScreenState] = useState(false);
  useEffect(() => {
    const handleFullScreen = () => {
      setIsFullScreenState(document.fullscreenElement !== null);
      console.log(isFullScreen);
    };
    document.addEventListener('fullscreenchange', handleFullScreen);
    console.log(isFullScreen);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreen);
      console.log(isFullScreen);
    };
  }, [isFullScreen]);

  const isFullScreenFinal =
    isFullScreen !== undefined ? isFullScreen : isFullScreenState;

  // handle shop button
  // const handleShopScroll = () => {
  //   window.scrollTo({
  //     top: 880,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };
  const handleShopScroll = () => {
    let topValue;

    if (window.innerWidth < 1580) {
      // sm, md and lg screens
      topValue = 900;
    } else {
      // xl screens and fullscreen
      topValue = 1000;
    }

    window.scrollTo({
      top: topValue,
      left: 0,
      behavior: 'smooth',
    });
  };

  // handle winter collection
  const handleCollectionScroll = () => {
    let topValue;

    if (window.innerWidth < 640) {
      // sm screens
      topValue = 3720;
    } else if (window.innerWidth < 1024) {
      // md screens
      topValue = 2250;
    } else if (window.innerWidth < 1280) {
      // lg screens
      topValue = 1500;
    } else {
      // xl screens and above
      topValue = 1650;
    }
    window.scrollTo({
      top: topValue,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        className={`animate-fadeIn transition-duration-500
        ${isFullScreenFinal ? 'full-screen' : ''}`}
      >
        {/* header content */}
        <header className='header p-4 md:p-8 py-16 mt-8 text-center relative text-white'>
          {/* hero text CTA */}
          <div
            className={
              isFullScreen
                ? 'mx-auto py-32 mt-8 md:mt-24 z-10'
                : 'mx-auto py-64 mt-24 xl:py-72'
            }
          >
            <h1 className=' text-7xl md:text-8xl font-bold py-10 pb-6 mix-blend-screen'>
              Function<span className='text-indigo-600'>.</span>
            </h1>
            <h2 className=' text-1xl md:text-3xl lg:text-4xl font-bold mix-blend-screen'>
              more than just code, we&apos;re also in-style
            </h2>
            <p className=' text-xs md:text-md lg:text-xl mix-blend-screen'>
              <code>
                you could say we&apos;re &quot;functionally fashionable&quot;
              </code>
            </p>
            {/* button wrapper */}
            <div className='flex justify-center items-center mt-8 md:mt-0 py-18 md:py-8'>
              {/* button border */}
              <div
                className='flex justify-center items-center border-2 border-white md:w-52 md:h-16 z-99'
                onClick={handleShopScroll}
              >
                <button
                  className='p-10 py-2 px-8 bg-transparent text-white font-bold 
                  hover:bg-accent-dark hover:scale-125 transition duration-300'
                  onClick={handleShopScroll}
                >
                  {/* // x-on:click.prevent="$scroll(document.querySelector('#store'), { offset: -60 }) */}
                  SHOP NOW
                </button>
              </div>
            </div>
            {/* winter collection CTA */}
            <div
              className='cta flex justify-between z-20
              absolute-bottom-0 md:absolute bottom-4 bg-gray-800 p-4 mt-8 mb-8 md:p-6 mx-auto md:mr-auto max-w-xl'
            >
              <div className='cta__text text-left'>
                <p className='text-gray-300 text-opacity-50'>What&apos;s New</p>
                <h2 className=' text-xl md:text-3xl font-extralight tracking-wider w-full'>
                  The Winter Collection
                </h2>
              </div>
              <div className='arrow'>
                <button
                  className='p-4 hover:scale-105 transition'
                  onClick={handleCollectionScroll}
                >
                  <Image
                    style={{
                      position: 'relative',
                      width: '36px',
                      height: '36px',
                    }}
                    // todo - sort the svg colour swaps!
                    src='/assets/icons/right-arrow.svg'
                    alt='right arrow icon'
                    width={36}
                    height={36}
                    className='arrow ml-24'
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className='relative w-screen h-screen overflow-hidden filter brightness-75 z-1'></div>
          <Image
            alt='hero-feature-image'
            src={feature}
            sizes='100vw'
            placeholder='blur'
            quality={100}
            className='absolute top-0 left-0 w-full h-full object-cover -z-10 transform hover:scale-105'
          />
          {/* <div className='absolute inset-0 bg-gradient-to-r from-transparent to-black/50 transform rotate-45 mix-blend-overlay'></div> */}
        </header>
      </div>
    </>
  );
};

export default Header;
