import Image from 'next/image';
{
  /* re-usable 'shop-all large' component for featured products */
}
const ShopLG = () => {
  return (
    <>
      <div className='shop-all flex justify-start mt-4'>
        <div className='shop-all-box border border-whiteFade p-4'>
          <h3 className='tracking-wide'>Shop All</h3>
        </div>
        <div className='shop-all-box border border-whiteFade border-l-0 p-4'>
          <Image
            src='/assets/icons/right-arrow-black.svg'
            alt='right arrow icon'
            width={18}
            height={18}
            className='arrow ml-1 mt-1 hover:scale-110'
            style={{
              fill: 'var(--arrow-color)',
              position: 'relative',
              width: '18px',
              height: '18px',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ShopLG;
