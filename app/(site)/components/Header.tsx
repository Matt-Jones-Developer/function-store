'use client';
import Image from 'next/image';
import feature from '@/public/assets/png/feature.png';
import useMediaQuery from '@mui/material/useMediaQuery';

// header component - fullscreen [TODO]
const Header = () => {
  // handle shop scroll
  const handleShopScroll = () => {
    let topValue;
    if (window.innerWidth < 640) {
      // sm screens
      topValue = 820;
    } else if (window.innerWidth < 1280) {
      // md screens
      topValue = 900;
    } else if (window.innerWidth < 1580) {
      // lg screens
      topValue = 920;
    } else {
      // xl screens
      topValue = 900;
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
      topValue = 1480;
    } else if (window.innerWidth < 1024) {
      // md screens
      topValue = 2200;
    } else if (window.innerWidth < 1280) {
      // lg screens
      topValue = 1240;
    } else {
      // xl screens and above
      topValue = 1580;
    }
    window.scrollTo({
      top: topValue,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className={`animate-fadeIn transition-duration-500 -mt-12`}>
        {/* header content */}
        <div className='header p-4 md:p-8 text-center relative text-white'>
          {/* hero text CTA - A UX/UI decision that I wanted to include */}
          <div className='header-container py-48 mt-48'>
            <h1 className='hero-text text-8xl font-bold py-10 pb-6 mix-blend-screen'>
              Function<span className='text-indigo-600'>.</span>
            </h1>
            <h2 className='hero-tagline mx-4 text-2xl md:text-3xl lg:text-4xl font-bold mix-blend-screen'>
              more than just code, we&apos;re also in-style
            </h2>
            {/* <p className=' text-xs md:text-md lg:text-xl mix-blend-screen'>
              <code>
                you could say we&apos;re &quot;functionally fashionable&quot;
              </code>
            </p> */}
            {/* button wrapper */}
            <div
              className='cta-now flex justify-center items-center mt-10 mb-0 md:mt-0 py-18 md:py-8 
              transition duration-300'
            >
              {/* button border */}
              <div className='now-btn-wrapper flex justify-center items-center border border-white md:w-52 md:h-16'>
                <button
                  className='now-btn p-10 py-3 px-8 bg-transparent text-white font-light 
                  hover:bg-accent-dark hover:scale-110 transition duration-300 z-50'
                  onClick={handleShopScroll}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
            {/* winter collection CTA */}
            <div
              className='winter-cta bg-slate parent flex z-50 absolute bottom-8 md:bottom-10
              left-7 right-7 px-6 py-7 mt-8 lg:mt-0 mb-8 mx-auto md:mr-auto max-w-lg 
              justify-start text-center sm:m-4 sm:left-4 sm:right-4 lg:left-0 lg:right-0'
            >
              <div className='cta-text text-left'>
                <p className='text-gray-300 text-opacity-50'>What&apos;s New</p>
                <h2 className='text-xl md:text-3xl font-extralight tracking-wider'>
                  The Winter Collection
                </h2>
              </div>
              <div className='child absolute inset-0 arrow-btn w-20 ml-auto border-l border-whiteFade'>
                <button
                  className='cta-btn h-full w-full ml-8 hover:scale-105 transition'
                  onClick={handleCollectionScroll}
                >
                  <Image
                    style={{
                      fill: 'var(--arrow-white)',
                      position: 'relative',
                      width: '16px',
                      height: '16px',
                    }}
                    src='/assets/icons/right-arrow.svg'
                    alt='right arrow icon'
                    width={16}
                    height={16}
                    className='arrow-white'
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
          <div
            className='absolute inset-0 bg-gradient-to-b 
              from-transparent to-black/50 transform mix-blend-overlay -z-10'
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
