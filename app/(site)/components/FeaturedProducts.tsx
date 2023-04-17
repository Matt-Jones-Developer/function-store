import Image from 'next/image';
import ShopLG from '../common/ShopLG';
// featured product imports
import featuredProduct1 from '@/public/assets/jpg/doorway-1.jpg';
import featuredProduct2 from '@/public/assets/jpg/doorway-2.jpg';

const FeaturedProducts = () => {
  return (
    <section className='featured-products mt-8'>
      {/* doorway container */}
      <div className='mt-16 max-w-full mx-6 md:mx-8 lg:mx-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          <div className='flex flex-col justify-center'>
            {/* set 2x aspect ratio to originals */}
            <Image
              style={{
                position: 'relative',
                width: '700px',
                height: '500px',
              }}
              src={featuredProduct1}
              alt='doorway-image-casual-brown-jacket'
              width={700}
              height={500}
              className='object-cover mb-2'
            />
            <div className='flex-grow mt-8'>
              <h2 className=' sub-heading font-extralight text-gray-800 text-3xl mb-4 tracking-wider'>
                The Casual Edit
              </h2>
              <p className='text font-light text-gray-500 pb-4'>
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
              style={{
                position: 'relative',
                width: '700px',
                height: '500px',
              }}
              src={featuredProduct2}
              alt='doorway-image-blue-hoodie-denim-jeans'
              width={700}
              height={500}
              className='object-cover mb-2'
            />
            <div className='flex-grow mt-8'>
              <h2 className='sub-heading font-extralight text-gray-800 text-3xl mb-4 tracking-wider'>
                The Denim Edit
              </h2>
              <p className='text font-light text-gray-500 pb-4'>
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
