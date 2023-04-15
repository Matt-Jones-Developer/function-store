import { getStoreItems } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Products() {
  const products = await getStoreItems();

  return (
    // this will be our products page content
    <div className='text-center'>
      <h2 className='mt-16 font-bold text-gray-500 text-3xl'>Latest Builds</h2>
      <p className='mt-4 text-xl text-gray-600'>
        These are our current products. Expressed using Next.js and offering a
        cool sanity.io backend feature.
        <br />
        View some example products below...
      </p>
      {/* products */}
      <div className='mt-5 m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {products.map((product) => (
          <Link
            href={`/products/${product.slug}`}
            key={product._id}
            className='border-2 border-gray-500 rounded-lg p-4 hover:scale-105 hover:border-purple-700 transition'
          >
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500 mb-4'
              />
            )}
            <div className='font-extrabold gradient'>{product.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
