import Image from 'next/image';
import Link from 'next/link';

const BackButton = () => {
  return (
    <>
      <div className='back flex justify-start mt-4'>
        <div className='border border-blackFade border-r-0 p-4'>
          <Link href='/' type='button'>
            <Image
              src='/assets/icons/right-arrow-black.svg'
              alt='left arrow icon'
              width={18}
              height={18}
              className='arrow-white mt-1 hover:scale-110'
              style={{
                transform: 'scaleX(-1)',
                position: 'relative',
                width: '18px',
                height: '18px',
              }}
            />
          </Link>
        </div>
        <div className='border border-blackFade p-4'>
          <h3>Back</h3>
        </div>
      </div>
    </>
  );
};

export default BackButton;
