import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};
export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className='flex justify-center items-center flex-col text-center mt-40 md:mt-28 m-4 p-4'>
      <h1 className='text-6xl font-bold drop-shadow text-gray-500'>
        {page.title}
      </h1>
      {page.image && (
        <Image
          src='/assets/products/product-image-5.png'
          alt={page.title}
          width={500}
          height={280}
          className=' mt-8 object-contain border border-gray-500'
        />
      )}
      <div className='text-lg mt-10 text-gray-500'>
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
