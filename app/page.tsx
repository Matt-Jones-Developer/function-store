import Image from 'next/image';
import { getStore } from '@/sanity/sanity-utils';

export default async function Home() {
  // I'd like getStore and getItems?
  // need to set the 'type' to items
  // template='store' type='store' currently
  const store = await getStore();
  return (
    <>
      {/* these will be component imports */}
      <div className='wrapper max-w-5xl mx-auto'>
        <header className='p-4 py-16 mt-8 text-center'>
          <h1 className='text-7xl font-extrabold py-10 pb-6'>
            Function<span className='text-accent'>.</span>
          </h1>
          <h2 className='text-3xl font-bold'>
            more than just code, we&apos;re also in-style
          </h2>
          <p>
            <code>
              you could say we&apos;re &quot;functionally fashionable&quot;
            </code>
          </p>
        </header>
        <main className='main'>
          <h2 className='text-3xl m-4 text-center'>
            browse our store<span className='text-accent'>.</span>
          </h2>
          <div className='p-4 m-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
            {/* would be map((items)) 
            not really, the items still map! */}
            {store.map((store) => (
              <div key={store._id}>{store.name}</div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
