import Image from 'next/image';
import '../../globals.css';

const ShopAll = () => {
  const handleShopAll = () => {
    window.scrollTo({
      top: 1400,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {/* re-usable 'shop-all' component */}
      <div className=' shop-all-text flex justify-end'>
        <div className='shop-all-box border border-whiteFade px-5 py-4'>
          <h3 className='font-light tracking-wide'>Shop All</h3>
        </div>
        <div
          className='shop-all-box border border-whiteFade border-l-0 p-4'
          onClick={handleShopAll}
        >
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
            className='arrow ml-1 mt-1 hover:scale-125'
          />
        </div>
      </div>
    </>
  );
};

export default ShopAll;
