// a component that would map the links via the page schema
import { getPages } from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function PageLinks() {
  const pages = await getPages();
  return (
    <div className='flex items-center gap-8 z-99'>
      {pages.map((page) => (
        <Link
          key={page._id}
          href={`/${page.slug}`}
          className='hover:scale-105 text-gray-400'
        >
          {page.title}
        </Link>
      ))}
    </div>
  );
}
