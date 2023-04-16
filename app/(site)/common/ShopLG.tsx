import Image from 'next/image';
{
  /* re-usable 'shop-all large' component for featured products */
}
const ShopLG = () => {
  return (
    <>
      <div className='shop-all flex justify-start mt-4'>
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
    </>
  );
};

export default ShopLG;
