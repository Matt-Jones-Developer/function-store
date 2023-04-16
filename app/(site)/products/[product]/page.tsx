import { PortableText } from '@portabletext/react';
import { getProduct } from '@/sanity/sanity-utils';
import Image from 'next/image';
import BackButton from '../../common/BackButton';

type Props = {
  params: { product: string };
};
// dynamically renders each product item as it's own page using the product schema
export default async function Product({ params }: Props) {
  const slug = params.product;
  const product = await getProduct(slug);

  return (
    <>
      <div className='product-page wrapper flex justify-start items-center mt-32 md:mt-0 p-4 ml-4'>
        <BackButton />
      </div>
      <div className='product flex flex-col justify-center items-center text-center mt-4 p-4'>
        {/*  test product page w dynamic image and content */}
        <h1 className='item-title font-bold text-gray-500 text-5xl drop-shadow'>
          {product.name}
        </h1>
        {/* product image (full screen with zoom effect) */}
        <div className='product-image image-container m-4 flex flex-col'>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={400}
            className='flex justify-center max-w-3xl mt-10 border border-gray-700 zoom-able object-cover'
          />
          <div className='max-w-lg md:max-w-3xl lg:max-w-5xl m-4 mt-8 md:mt-4 text-xl'>
            <PortableText value={product.content} />
          </div>
        </div>
      </div>
    </>
  );
}
