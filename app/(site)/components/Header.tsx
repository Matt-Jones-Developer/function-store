'use client';
import Image from 'next/image';
import feature from '@/public/assets/png/feature.png';

// header component - fullscreen [TODO]
const Header = () => {
  // handle shop scroll
  const handleShopScroll = () => {
    let topValue;
    if (window.innerWidth < 640) {
      // sm screens
      topValue = 900;
    } else if (window.innerWidth < 1280) {
      // md screens
      topValue = 940;
    } else if (window.innerWidth < 1580) {
      // lg screens
      topValue = 960;
    } else {
      // xl screens
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
      topValue = 1480;
    } else {
      // xl screens and above
      topValue = 1780;
    }
    window.scrollTo({
      top: topValue,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className={`animate-fadeIn transition-duration-500`}>
        {/* header content */}
        <div className='header p-4 md:p-8 text-center relative text-white'>
          {/* hero text CTA - A UX/UI decision that I wanted to include */}
          <div className='header-container py-48 mt-48 md:py-56 md:mt-56 lg:py-48 lg:mt-48'>
            <h1 className='hero-text text-8xl font-bold py-10 pb-6 mix-blend-screen'>
              Function<span className='text-indigo-600'>.</span>
            </h1>
            <h2 className='hero-tagline text-2xl md:text-3xl lg:text-4xl font-bold mix-blend-screen'>
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
              hover:scale-105 transition duration-300'
            >
              {/* button border */}
              <div
                className='flex justify-center items-center border border-white md:w-52 md:h-16 z-99'
                onClick={handleShopScroll}
              >
                <button
                  className='p-10 py-3 px-8 bg-transparent text-white font-light 
                  hover:bg-accent-dark hover:scale-110 transition duration-300'
                  onClick={handleShopScroll}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
            {/* winter collection CTA */}
            <div
              className='winter-cta bg-slate parent flex z-50 absolute bottom-0 md:bottom-20 lg:bottom-8
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
                  className='cta-btn h-full hover:scale-105 transition'
                  onClick={handleCollectionScroll}
                >
                  <Image
                    style={{
                      position: 'relative',
                      width: '16px',
                      height: '16px',
                    }}
                    src='/assets/icons/right-arrow.svg'
                    alt='right arrow icon'
                    width={16}
                    height={16}
                    className='arrow'
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
