import Image from 'next/image';
import Link from 'next/link';

const BackButton = () => {
  return (
    <>
      <div className='back flex justify-start mt-4'>
        <div className='border-2 border-gray-300 border-r-0 p-4'>
          <Link href='/'>
            <Image
              src='/assets/icons/right-arrow-black.svg'
              alt='right arrow icon'
              width={24}
              height={24}
              className='arrow ml-1 hover:scale-105'
              style={{
                transform: 'scaleX(-1)',
                fill: 'var(--arrow-color)',
                position: 'relative',
                width: '24px',
                height: '24px',
              }}
            />
          </Link>
        </div>
        <div className='border-2 border-gray-300 p-4'>
          <h3>Back</h3>
        </div>
      </div>
    </>
  );
};

export default BackButton;
