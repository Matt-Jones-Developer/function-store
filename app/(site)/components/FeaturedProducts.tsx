import Image from 'next/image';
import Link from 'next/link';
// featured product imports
import featuredProduct1 from '@/public/assets/png/doorway-1.png';
import featuredProduct2 from '@/public/assets/png/doorway-2.png';
import ShopLG from '../common/ShopLG';

const FeaturedProducts = () => {
  return (
    <section className='featured-products'>
      {/* doorway container */}
      <div className='mt-16 max-w-full mx-8 md:mx-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          <div className='flex flex-col justify-center'>
            <Image
              src={featuredProduct1}
              alt='doorway-image-casual-brown-jacket'
              width={850}
              height={300}
              className='object-cover mb-2'
            />
            <div className='flex-grow mt-8'>
              <h2 className=' sub-heading font-light text-gray-800 text-3xl mb-8 tracking-wider'>
                The Casual Edit
              </h2>
              <p className='text font-light text-gray-600 pb-4'>
                Nulla aliquip deserunt enim reprehenderit sit esse sunt duis id
                nisi aliqua est sint. Ipsum ea elit aliqua dolor est mollit
                ipsum cillum. Tempor pariatur adipisicing cillum laborum sunt.
                Excepteur officia laboris quis id labore et cillum minim dolore
                aute incididunt ea. Esse cupidatat et esse deserunt pariatur id
                nostrud nulla adipisicing laborum occaecat anim eu do.
              </p>
              <ShopLG />
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <Image
              src={featuredProduct2}
              alt='doorway-image-blue-hoodie-denim-jeans'
              width={850}
              height={300}
              className='object-cover mb-2'
            />
            <div className='flex-grow mt-8'>
              <h2 className='sub-heading font-light text-gray-800 text-3xl mb-8 tracking-wider'>
                The Denim Edit
              </h2>
              <p className='text font-light text-gray-600 pb-4'>
                Nulla aliquip deserunt enim reprehenderit sit esse sunt duis id
                nisi aliqua est sint. Ipsum ea elit aliqua dolor est mollit
                ipsum cillum. Tempor pariatur adipisicing cillum laborum sunt.
                Excepteur officia laboris quis id labore et cillum minim dolore
                aute incididunt ea. Esse cupidatat et esse deserunt pariatur id
                nostrud nulla adipisicing laborum occaecat anim eu do.
              </p>
              <ShopLG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
