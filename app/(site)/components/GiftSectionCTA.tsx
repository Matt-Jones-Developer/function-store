'use client';
import Image from 'next/image';

// this would launch 'gift page' once added
const GiftSectionCTA = () => {
  // auto scroll to top
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      {/* gift section */}
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
        {/* custom white shop-all */}
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
              onClick={handleScroll}
              style={{
                position: 'relative',
                width: '48px',
                height: '48px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSectionCTA;
