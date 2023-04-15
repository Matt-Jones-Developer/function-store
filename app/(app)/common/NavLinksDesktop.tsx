'use client';
import { useEffect } from 'react';
import Link from 'next/link';

function NavLinksDesktop() {
  useEffect(() => {
    // map over each <li> to set the hover action
    const listItems = document.querySelectorAll('.nav-links li');

    listItems.forEach((item) => {
      item.classList.add(
        'hover:scale-105',
        'hover:text-indigo-600',
        'hover:ml-0'
      );
    });
  }, []);

  // Desktop Nav Items
  return (
    <div className='mr-auto ml-8 lg:ml-20 mt-1 z-50'>
      <ul
        className='nav-links flex flex-row space-x-8 font-light
        text-xs md:text-sm lg:text-md'
      >
        <li>
          <Link href='/'>What&apos;s New</Link>
        </li>
        <li>
          <Link href='/'>Designer</Link>
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
  );
}

export default NavLinksDesktop;
