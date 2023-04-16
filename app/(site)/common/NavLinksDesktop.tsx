'use client';
import { useEffect } from 'react';
import Link from 'next/link';

// desktop nav items are built the traditional way
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

  // Nav Items - temporary page links
  return (
    <div className='flex justify-center mx-auto ml-8 lg:ml-20 mt-1 z-50'>
      <ul
        className='nav-links flex flex-row space-x-8 font-light
        text-xs md:text-sm lg:text-md'
      >
        <li>
          <Link href='/new'>What&apos;s New</Link>
        </li>
        <li>
          <Link href='/designer'>Designer</Link>
        </li>
        <li>
          <Link href='/coming-soon'>Clothing</Link>
        </li>
        <li>
          <Link href='/coming-soon'>Accessories</Link>
        </li>
        <li>
          <Link href='/coming-soon'>Journals</Link>
        </li>
        <li>
          <Link href='/coming-soon'>Gifts</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinksDesktop;
