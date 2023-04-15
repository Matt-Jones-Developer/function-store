import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string };
};
export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className='text-5xl font-bold'>{page.title}</h1>
      <div className='text-lg mt-10 text-gray-500'>
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
