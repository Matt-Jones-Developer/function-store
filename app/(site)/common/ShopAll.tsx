import Image from 'next/image';

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
      <div className=' shop-all flex justify-end'>
        <div className='border-2 border-gray-300 p-4'>
          <h3>Shop All</h3>
        </div>
        <div
          className='border-2 border-gray-300 border-l-0 p-4'
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
