import Image from 'next/image';
import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';
// import NavLinks from './NavLinks';

const NavBar = () => {
  return (
    <nav
      className='nav w-full flex flex-nowrap justify-between items-center
      gap-4 py-6 px-8 mt-0 fixed top-0 bg-white z-99'
    >
      <div className='hover:animate-floating'>
        <Link href='/'>
          <Image
            alt='function brand logo'
            src='/assets/logos/logo.svg'
            width={160}
            // fix height error
            height={35}
            priority={true}
            className='logo'
          ></Image>
        </Link>
      </div>
      <div className='nav-items mr-auto ml-16 z-100'>
        <ul className='nav-items-list flex flex-row gap-8 font-light'>
          <li>
            <Link href='/'>What&apos;s New</Link>
          </li>
          <li>
            <Link href='/'>Designers</Link>
          </li>
          <li>
            <Link href='/'>Clothing</Link>
          </li>
          <li>
            <Link href='/'>Accessories</Link>
          </li>
          <li>
            <Link href='/'>Journals</Link>
          </li>
          <li>
            <Link href='/'>Gifts</Link>
          </li>
        </ul>
      </div>
      <div className='search-bar'>
        <div className='relative'>
          <Image
            width={20}
            height={20}
            alt='search bar icon'
            src='/assets/icons/search.svg'
            className=' search absolute top-0 left-0 h-full w-8 pl-4 mr-4 bg-gray-100 z-20'
          />
          <input
            type='text'
            placeholder="Search for 'Cashmere'"
            className='search px-12 py-3 pr-32 bg-gray-100 text-gray-500 relative z-10'
          />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='cart'>
          <Image
            width={30}
            height={30}
            alt='cart icon'
            src='/assets/icons/bag-icon.svg'
            className='ml-4 hover:scale-125 transition'
          />
          {/* <p className='text-center text-xs'>cart</p> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
