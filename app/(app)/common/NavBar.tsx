'use client';
// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLinksDesktop from './NavLinksDesktop';
import NavLinksMobile from './NavLinksMobile';
import '../../globals.css';
import styles from '../../styles/NavBar.module.css';

const NavBar = () => {
  // set link paths
  const pathname = usePathname();
  // toggle state
  const [toggle, setToggle] = useState(false);
  // animate state
  const [animate, setAnimate] = useState(false);

  // auto show/hide the mobile nav area
  const [isNavOpen, setIsNavOpen] = useState(false);

  // close mobile nav drop-down when screen size is resized larger than `md`
  useEffect(() => {
    function handleResize() {
      console.log('handleResize');
      if (window.innerWidth >= 768 && isNavOpen) {
        setIsNavOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isNavOpen]);

  // handle toggle function
  const handleToggle = () => {
    setToggle(!toggle);
    setAnimate(!animate);
    if (window.innerWidth >= 768) {
      setIsNavOpen(false);
    }
  };
  // Fixed
  // const handleToggle = () => {
  //   setToggle(!toggle);

  //   if (window.innerWidth < 768) {
  //     setIsNavOpen(!isNavOpen);
  //     setAnimate(true);
  //   }
  // };

  // const handleToggle = () => {
  //   setToggle(!toggle);
  //   setAnimate(!animate);

  //   if (toggle && window.innerWidth < 768) {
  //     const menu = document.getElementById('menu');

  //     // detect when slide-down animation ends and remove animate-slideDown class
  //     menu.addEventListener('animationend', function handleAnimationEnd() {
  //       menu.removeEventListener('animationend', handleAnimationEnd);
  //       menu.classList.remove('animate-slideDown');
  //     });

  //     // detect when slide-up animation ends and remove animate-slideUp class
  //     menu.addEventListener(
  //       'animationend',
  //       function handleAnimationEnd() {
  //         menu.removeEventListener('animationend', handleAnimationEnd);
  //         menu.classList.remove('animate-slideUp');
  //         setIsNavOpen(false);
  //       },
  //       { once: true }
  //     );

  //     // add animate-slideDown class to slide down menu div
  //     menu.classList.add('animate-slideDown');
  //   } else if (window.innerWidth >= 768) {
  //     setIsNavOpen(false);
  //   }
  // };

  // handle navbar reveal scroll
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return (
    <>
      <nav
        className='nav-strip w-full flex flex-nowrap justify-between items-center
        gap-4 py-6 px-4 md:px-8 mt-0 fixed top-0 bg-white z-100'
      >
        {/* top row */}
        <div className='flex justify-between items-center'>
          {/* mobile nav toggle (md/sm) */}
          <div className='mobile-nav flex justify-start mr-8 lg:hidden'>
            <button
              type='button'
              className={`mobile-menu-toggle ${animate ? 'open' : ''}
              -m-2.5 p-2.5 inline-flex items-center`}
              onClick={() => {
                handleToggle();
              }}
            >
              {/* I felt this icon was too fine next to the bold logo */}
              <Image
                width={30}
                height={30}
                alt='menu toggle icon'
                src='/assets/icons/menu-icon.svg'
                className='hover:scale-125 transition'
              />
              {/* custom hamburger divs */}
              {/* <div className={`burgerBars space-y-1`}>
                <div className='bBar w-8 h-1 mb-1 bg-gray-600'></div>
                <div className='bBar w-8 h-1 mb-1 bg-gray-600'></div>
                <div className='bBar w-8 h-1 mb-1 bg-gray-600'></div>
              </div> */}
              <div>
                <p className='font-light ml-4'>Menu</p>
              </div>
            </button>
          </div>
          {/* branding logo */}
          <div className='animate-slideInLeft'>
            <Link href='/'>
              <Image
                // add styles here to catch next 13's quirk with Image height errors
                style={{ position: 'relative', width: '160px', height: '37px' }}
                alt='function brand logo'
                src='/assets/logos/logo.svg'
                width={160}
                height={33}
                priority={true}
                className='logo -ml-2 md:ml-2 lg:ml-0'
              />
            </Link>
          </div>
          {/* border right full height */}
          {/* <div className='border-edge absolute inset-0 left-60 mr-6 border-r-2 border-gray-100 h-full w-2'></div> */}
          {/* nav items (as tabs component) */}
          <div className='hidden lg:flex lg:space-x-12 nav-items z-50'>
            {/* import NavTabs component */}
            <NavLinksDesktop />
          </div>
        </div>
        {/* cart and login items */}
        {/* cart link component */}
        <div className='flex flex-nowrap justify-end items-center ml-auto'>
          <div className='cart'>
            <Image
              width={24}
              height={24}
              alt='cart icon'
              src='/assets/icons/bag-icon.svg'
              className='ml-4 hover:scale-125 transition sm:w-8 sm:h-8'
            />
            {/* <p className='text-center text-xs'>cart</p> */}
          </div>

          {/* login link component */}
          <div className='login'>
            <Image
              width={24}
              height={24}
              alt='login icon'
              src='/assets/icons/login-icon.png'
              className='ml-4 hover:scale-125 transition sm:w-8 sm:h-8'
            />
            {/* <p className='text-center text-xs'>cart</p> */}
          </div>
        </div>
        {/* bottom row search bar */}
        <div className='flex flex-nowrap justify-end items-center'>
          {/* search bar component */}
          <div className='search-bar search-bar-container lg:ml-4 md:ml-auto'>
            <div className='relative lg:w-auto w-full'>
              <Image
                width={20}
                height={20}
                alt='search bar icon'
                src='/assets/icons/search.svg'
                className=' search absolute top-0 left-0 w-4 m-4 bg-gray-100 z-20'
              />
              <input
                type='text'
                placeholder="Search for 'Cashmere'"
                className='search px-12 py-3 md:pr-46 w-96 md:w-64 ml-auto
                 bg-gray-100 text-gray-500 relative z-10'
              />
            </div>
          </div>
        </div>
      </nav>
      {/* mobile toggle & mobile nav */}
      {toggle && (
        <>
          {/* slide down menu */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-gray-400 opacity-90 z-40 
            ${animate ? 'animate-slideDown' : 'animate-slideUp'}`}
            // onAnimationEnd={() => {
            //   if (!animate) {
            //     setToggle(false);
            //   }
            // }}
            // onClick={handleToggle}
            onClick={() => {
              handleToggle();
              setTimeout(() => {
                setIsNavOpen(false);
              }, 500);
            }}
          />
          {/* mobile nav items slide-in */}
          <nav
            id='menu'
            className={`${styles.menu} fixed top-20 left-2.5 w-full h-full 
            flex flex-col z-40 animate-slideInLeft
            ${toggle ? styles.open : ''}`}
            style={{
              transform: toggle ? 'translateX(0%)' : 'translateX(-100%)',
            }}
          >
            {/* map the nav object items */}
            <NavLinksMobile currentPathname={pathname} />
          </nav>
        </>
      )}
    </>
  );
};

export default NavBar;
