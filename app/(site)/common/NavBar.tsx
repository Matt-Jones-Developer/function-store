'use client';
// import { useRouter } from 'next/router';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import Image from 'next/image';
import NavLinksDesktop from './NavLinksDesktop';
import NavLinksMobile from './NavLinksMobile';
import LoginPage from './LoginSignup';
import loginIcon from '@/public/assets/icons/login-icon.png';
import loginIconOn from '@/public/assets/icons/login-icon_on.png';
import '../../globals.css';
import styles from './styles/NavBar.module.css';

const NavBar = () => {
  // useMediaQuery -target specific screen sizes
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 414px)');
  // hide nav line
  const hideLine = useMediaQuery('(min-width: 640px)');
  // states setup
  // set link paths
  const pathname = usePathname();
  // nav menu toggle state
  const [toggle, setToggle] = useState(false);
  // animate state
  const [animate, setAnimate] = useState(false);
  // [TODO] auto show/hide the mobile nav area
  const [isNavOpen, setIsNavOpen] = useState(false);
  // login menu state
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  // handle login page once open
  const [showLoginPage, setShowLoginPage] = useState(false);

  // handle the nav menu toggle
  // animate the icons
  const handleNavToggle = useCallback(() => {
    setToggle((prevToggle) => !prevToggle);
    setAnimate((prevAnimate) => !prevAnimate);
    if (window.innerWidth >= 768) {
      setIsNavOpen(false);
    }
    if (!toggle) {
      setTimeout(() => {
        setIsNavOpen(false);
      }, 500);
    }
  }, [toggle]);

  //  [TODO] close mobile nav drop-down when
  // screen size is resized larger than `md`
  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth >= 768 && isNavOpen) {
  //       handleNavToggle();
  //     }
  //   }
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, [isNavOpen, handleNavToggle]);

  // handle openLogin Icon (nav btn)
  const handleLoginToggle = useCallback(() => {
    setIsLoginOpen((prevToggle) => !prevToggle);
  }, []);
  // handle login/signup clicks
  const handleLoginClick = () => {
    if (!showLoginPage) {
      setShowLoginPage(true);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      setShowLoginPage(false);
    }
  };
  // login/signup switch + signup/submit
  const handleLoginPageClose = () => {
    setShowLoginPage(false);
  };

  //   setShowLoginPage(true);
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  //   if (!isLoginOpen) {
  //     setTimeout(() => {
  //       setIsLoginOpen(false);
  //     }, 500);
  //   }
  // }, [isLoginOpen]);

  // change its colour if on
  // fill the login icon SVG
  const [isOn, setIsOn] = useState(false);
  const toggleLoginOn = () => {
    setIsFOn(!isOn);
  };

  const router = useRouter();

  const handleCartClick = async () => {
    // update cart state here

    // retrieve the current cart information from state.
    // perform updates to the cart information based on user actions.
    // update the cart information in state and persistent data source/local storage.
    // trigger any necessary UI updates to reflect the changes in the cart information.
    // await updateCart();

    // navigate to cart page
    router.push('/cart');
  };

  // scroll to top on logo click?
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav
        className='nav-strip w-full flex flex-nowrap justify-between items-center
        gap-4 px-6 py-6 md:px-4 lg:px-8 mt-0 fixed top-0 bg-white z-100'
      >
        {/* navbar top row */}
        <div className='flex justify-between items-center'>
          {/* hidden mobile nav toggle (md/sm) */}
          <div className='mobile-nav flex justify-start mr-8 md:mr-16 lg:mr-8 lg:hidden'>
            <button
              type='button'
              className={`mobile-menu-toggle ${animate ? 'open' : ''}
              -m-2.5 p-2.5 inline-flex items-center`}
              onClick={() => {
                handleNavToggle();
              }}
            >
              {/* mobile menu hamburger */}
              <Image
                width={30}
                height={30}
                alt='menu toggle icon'
                src='/assets/icons/menu-icon.svg'
                className='mobile-menu-toggle hover:scale-125 transition'
                style={{ position: 'relative', width: '30px', height: '30px' }}
              />
              <div>
                <p className='menu-label font-light ml-4'>Menu</p>
              </div>
            </button>
          </div>
          {/* end hidden */}

          {/* branding logo */}
          <div
            className={`logo-container animate-slideInLeft ${
              isTablet ? 'text-center' : ''
            }`}
          >
            <Link href='/' onClick={handleScroll}>
              <Image
                // styles here catch next 13's quirk with Image height errors
                style={{ position: 'relative', width: '160px', height: '37px' }}
                alt='function brand logo'
                src='/assets/logos/logo.svg'
                width={160}
                height={37}
                priority={true}
                className='logo md:ml-2 lg:ml-0'
              />
            </Link>
          </div>
          {/* border right full height - figma bug or intentional? */}
          {/* <div className='border-edge absolute inset-0 left-60 mr-6 border-r-2 border-gray-100 h-full w-2'></div> */}

          {/* desktop nav items */}
          <div className='hidden lg:flex lg:space-x-12 nav-items z-50'>
            {/* import NavLinkDesktop component */}
            <NavLinksDesktop />
          </div>
        </div>

        {/* cart and login items */}
        {/* CART ICON */}
        <div className='flex flex-nowrap justify-end items-center ml-auto'>
          <div className='cart' onClick={handleCartClick}>
            <Image
              width={24}
              height={24}
              alt='cart icon'
              src='/assets/icons/bag-icon.svg'
              className='ml-4 hover:scale-125 transition sm:w-8 sm:h-8'
            />
          </div>

          {/* LOGIN TOGGLE icon component 
          // awaiting SVG file to get working */}
          <div
            className='login'
            // onClick={() => {
            //   handleLoginToggle();
            // }}
            onClick={handleLoginClick}
          >
            <Image
              width={24}
              height={24}
              alt='login icon'
              src={isOn ? loginIconOn : loginIcon}
              className={`ml-4 hover:scale-125 transition sm:w-8 sm:h-8
              login ${isOn ? 'fill-lime-500' : ''}`}
            />
            {/* <p className='text-center text-xs'>cart</p> */}
          </div>
        </div>

        {/* hidden mobile only hr line */}
        {hideLine ? null : (
          <div className='hide-line border-t border-gray-400 mt-1 w-full h-2 md:w-1/2 lg:w-2/3'></div>
        )}

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
                className='search-icon absolute top-0 left-0 w-4 m-4 z-20'
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
        {/* end desktop navbar */}
      </nav>
      {/* modals */}

      {/* display login/signup modal when requested */}
      {showLoginPage && <LoginPage onClose={handleLoginPageClose} />}

      {/* slide down mobile menu BG and items */}
      {toggle && (
        <>
          {/* slide down nav menu */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-gray-400 opacity-90 z-50 
      ${animate ? 'animate-slideDown' : 'animate-slideUp'}`}
            onClick={() => {
              handleNavToggle();
              setTimeout(() => {
                setIsNavOpen(false);
                setAnimate(false);
              }, 500);
            }}
          />

          {/* mobile nav items slide-in */}
          <nav
            id='menu'
            className={`${styles.menu} fixed top-20 w-full h-full 
      flex flex-col ${toggle ? 'animate-slideInLeft' : 'animate-slideOutLeft'}
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
