import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logos/logo.svg';
import tw from 'tailwind-styled-components';

const SlideOutDiv = tw.div`
  absolute
  top-0
  left-0
  w-full
  h-full
  transition-transform
  duration-500
  transform
    translate-x-full
`;

function SlidingLogo() {
  // set shelf state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a short delay to trigger the animation
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='logo'>
      {/* slide out nav brand bar/logo */}
      <SlideOutDiv style={{ transform: isVisible ? 'translateX(0)' : '' }}>
        <div className='nav-logo'>
          {/* Nav Icon btn and name link */}
          <Link href='https://github.com/Matt-Jones-Developer/function-store'>
            <Image
              className='pl-8'
              src={logo}
              alt='function logo icon'
              width={160}
              // fix height error
              height={35}
              priority={true}
            />
          </Link>
        </div>
      </SlideOutDiv>
    </div>
  );
}

export default SlidingLogo;
