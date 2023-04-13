import Image from 'next/image';
import heart from '../../public/assets/icons/heart.svg';
import bag from '../../public/assets/icons/bag-icon.svg';

interface ItemCardProps {
  index: number;
  name: string;
  price: number;
  description: string;
}

export default function ItemCard(props: ItemCardProps) {
  const { index } = props;

  return (
    <div className='border p-2'>
      <div className='flex justify-between items-center align-items-center'>
        <h3 className='pb-6'>{props.name}</h3>
        <Image
          className='mb-5'
          alt='heart-icon'
          src={heart}
          width={20}
          height={20}
        />
      </div>
      <div className='flex justify-between items-center align-items-center'>
        <h4 className='mb-2 font-light text-gray-500'>£{props.price}</h4>
        <Image
          className='mb-3'
          alt='heart-icon'
          src={bag}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
