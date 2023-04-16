'use client';
import { getStore } from '@/sanity/sanity-utils';
import { useState, useEffect } from 'react';
import { Store } from '@/types/Store';
import Image from 'next/image';
import Link from 'next/link';
import ItemCard from './ItemCard';
import itemData from '../data/inventory.json';
import ShopAll from '../common/ShopAll';

// storeFront utilises sanity.io backend that stores each product for the client
// this makes it easy for the client to edit, add or remove items from their store
// to offer different methods, I have a inventory json file used to import product data such as name and price

export default function StoreFront() {
  const [store, setStore] = useState<Store[]>([]);

  useEffect(() => {
    async function fetchData() {
      const storeData = await getStore();
      setStore(storeData);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className='store-front flex justify-between items-center m-8'>
        <h2 className=' sub-heading text-3xl font-light text-gray-800 tracking-wider'>
          Best Sellers
        </h2>
        <ShopAll />
      </div>
      {/* dynamically rendered product cards via store schema */}
      <div className='products-grid mt-6 m-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
        {store.map((product) => (
          <div key={product._id} className='z-40'>
            <Link
              key={product._id}
              href={`/products/${product.slug}`}
              className='products hover:scale-105 transition z-50'
              style={{ display: 'block' }}
            >
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={750}
                  height={300}
                  className='border border-gray-500 mb-4 z-50'
                />
              )}
            </Link>
            {/* import ItemCards - dynamically access product json data */}
            <div className='w-full mx-auto border-2 p-4'>
              {itemData
                .filter((item) => item.name === product.name)
                .map((item, i) => (
                  <div key={`card-${i}`} className='w-full mx-auto'>
                    {/* import ItemCard */}
                    <ItemCard index={i} {...item} price={Number(item.price)} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
