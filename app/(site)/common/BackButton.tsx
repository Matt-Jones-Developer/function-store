import Image from 'next/image';
import Link from 'next/link';

const BackButton = () => {
  return (
    <>
      <div className='back flex justify-start mt-4'>
        <div className='border border-whiteFade border-r-0 p-4'>
          <Link href='/'>
            <Image
              src='/assets/icons/right-arrow.svg'
              alt='right arrow icon'
              width={18}
              height={18}
              className='arrow mt-1 hover:scale-110 z-50'
              style={{
                transform: 'scaleX(-1)',
                fill: 'var(--arrow-color)',
                position: 'relative',
                width: '18px',
                height: '18px',
              }}
            />
          </Link>
        </div>
        <div className='border border-whiteFade p-4'>
          <h3>Back</h3>
        </div>
      </div>
    </>
  );
};

export default BackButton;
