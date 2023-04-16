// Mobile Nav uses object data (menuItems) and mapped via JS
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStore,
  faMagicWandSparkles,
  faShirt,
  faSocks,
  faBook,
  faGift,
  faMagnifyingGlass,
  faShoppingBag,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import '../../globals.css';

const NavLinksMobile = ({ currentPathname }: { currentPathname: string }) => {
  // set toggle init state
  const [toggle, setToggle] = useState(false);
  // animate state
  const [animate, setAnimate] = useState(false);
  // handle toggles function
  const handleToggle = () => {
    setToggle(!toggle);
    setAnimate(!animate);
  };

  // define the menu items
  const menuItems = {
    home: {
      icon: <FontAwesomeIcon icon={faHome} className='sm mr-2 p-2' />,
      link: '/',
      name: 'Home',
    },
    new: {
      icon: <FontAwesomeIcon icon={faStore} className='sm mr-2 p-2' />,
      link: '/new',
      name: 'New',
    },
    designer: {
      icon: (
        <FontAwesomeIcon icon={faMagicWandSparkles} className='sm mr-2 p-2' />
      ),
      link: '/designer',
      name: 'Designer',
    },
    clothing: {
      icon: <FontAwesomeIcon icon={faShirt} className='sm mr-2 p-2' />,
      link: '/coming-soon',
      name: 'Clothing',
    },
    accessories: {
      icon: <FontAwesomeIcon icon={faSocks} className='sm mr-2 p-2' />,
      link: 'accessories',
      name: 'Accessories',
    },
    journals: {
      icon: <FontAwesomeIcon icon={faBook} className='sm mr-2 p-2' />,
      link: '/journals',
      name: 'Journals',
    },
    gifts: {
      icon: <FontAwesomeIcon icon={faGift} className='sm mr-2 p-2' />,
      link: '/gifts',
      name: 'Gifts',
    },
    search: {
      icon: (
        <FontAwesomeIcon icon={faMagnifyingGlass} className='sm mr-2 p-2' />
      ),
      link: '/search',
      name: 'Search',
    },
    cart: {
      icon: <FontAwesomeIcon icon={faShoppingBag} className='sm mr-2 p-2' />,
      link: '/cart',
      name: 'Cart',
    },
  };

  // filter menuItems
  const mobileMenu = Object.values(menuItems).filter((links) => {
    return links.link !== currentPathname;
  });

  return (
    // current nav mobile menu - mapped via object
    <div className='nav-items m-4 mt-32 md:mt-8 md:pl-3 text-md flex flex-col'>
      {mobileMenu.map((menu, index) => (
        <div className='flex items-center' key={index}>
          {menu.icon}
          <Link
            key={index}
            onClick={handleToggle}
            className='w-8 mobile-nav-items hover:scale-105
             hover:text-indigo-600 hover:ml-2'
            href={menu.link}
          >
            {menu.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinksMobile;
