// product items data - dynamically rendered item name and price via data json
'use client';
import { useState } from 'react';
import Image from 'next/image';
import heart from '@/public/assets/icons/heart.svg';
import filledHeart from '@/public/assets/icons/heart-filled.svg';
import bag from '@/public/assets/icons/bag-icon.svg';
import '../../../app/globals.css';

interface ItemCardProps {
  index: number;
  name: string;
  price: number;
  description: string;
}

export default function ItemCard(props: ItemCardProps) {
  const { index } = props;

  const [isFilled, setIsFilled] = useState(false);

  const toggleFill = () => {
    setIsFilled(!isFilled);
  };

  return (
    <>
      <div className='flex justify-between items-center align-items-center'>
        <h3 className='pb-6'>{props.name}</h3>
        <Image
          style={{ position: 'relative', width: '16px', height: '16px' }}
          className={`heart mb-5 hover:scale-125 transition ${
            isFilled ? 'fill-pink-500' : ''
          }`}
          alt='heart-icon'
          src={isFilled ? filledHeart : heart}
          width={16}
          height={16}
          onClick={toggleFill}
        />
      </div>
      <div className='flex justify-between items-center align-items-center'>
        <h4 className='mb-2 font-light text-gray-500'>£{props.price}</h4>
        <Image
          style={{ position: 'relative', width: '16px', height: '16px' }}
          className='bag mb-3 inline-block cursor-pointer hover:scale-125 transition'
          alt='bag-icon'
          src={bag}
          width={16}
          height={16}
        />
      </div>
    </>
  );
}
