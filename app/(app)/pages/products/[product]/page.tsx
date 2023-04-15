import { getStoreItems } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { product: string };
};

export default async function product({ params }: Props) {
  const slug = params.product;
  const product = await getStoreItems(slug);

  return (
    <div className='max-w-3xl mx-auto py-20'>
      <header className='flex justify-between items-center'>
        <h1 className='text-5xl font-bold drop-shadow gradient'>
          {product.name}
        </h1>
        <a
          href={product.url}
          title='view product'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-300 rounded-lg text-gray-700 font-bold 
          py-3 px-4 whitespace-nowrap hover:bg-purple-700 hover:text-purple-100 transition'
        >
          View product
        </a>
      </header>
      {/* .content is an array of blocks - display it via npm i portabletext/react... */}
      <div className='mt-4 ml-1 text-gray-100 text-lg'>
        <PortableText value={product.content} />
      </div>
      <Image
        src={product.image}
        alt={product.name}
        width={1920}
        height={1080}
        className='mt-10 border-2 border-gray-700 object-cover rounded-xl'
      />
    </div>
  );
}
