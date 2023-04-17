'use client';
import React from 'react';
import Slider from 'react-slick';
import { useMediaQuery, Theme } from '@mui/material';
import { getStore } from '@/sanity/sanity-utils';
import { useState, useEffect } from 'react';
import { Store } from '@/types/Store';
import Image from 'next/image';
import Link from 'next/link';
import ItemCard from './ItemCard';
import itemData from '../data/inventory.json';
import ShopAll from '../common/ShopAll';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// storeFront utilises sanity.io backend that stores each product for the client
// this makes it easy for the client to edit, add or remove items from their store
// to offer different methods, I have a inventory json file used to import product data such as name and price

const StoreFront = () => {
  // setStore from store array each update
  const [store, setStore] = useState<Store[]>([]);
  // mui themeProvider values (for breakpoints)
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  // define isSmallScreen for mui query
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')) ? 'sm' : '';

  useEffect(() => {
    async function fetchData() {
      const storeData = await getStore();
      setStore(storeData);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className='store-front flex justify-between items-center mt-16 mb-8 m-6 md:m-8'>
        <h2 className=' sub-heading text-3xl font-extralight text-gray-800 tracking-wider'>
          Best Sellers
        </h2>
        <ShopAll />
      </div>
      {/* dynamically rendered product cards via store schema */}
      <div className='store-front-container mx-6'>
        {/* additional slider carousel for mobiles */}
        <ThemeProvider theme={theme}>
          {isSmallScreen ? (
            <div className='products-carousel'>
              <Slider {...carouselSettings}>
                {store.map((product) => (
                  <div key={product._id}>
                    <Link
                      href={`/products/${product.slug}`}
                      className='products hover:scale-105 transition'
                      style={{ display: 'block' }}
                    >
                      {product.image && (
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={650}
                          height={250}
                          className='border border-blackFade mb-4'
                        />
                      )}
                    </Link>
                    {/* import ItemCards - dynamically access product json data */}
                    <div className='w-full mx-auto border p-4'>
                      {itemData
                        .filter((item) => item.name === product.name)
                        .map((item, i) => (
                          <div key={`card-${i}`} className='w-full mx-auto'>
                            {/* import ItemCard */}
                            <ItemCard
                              index={i}
                              {...item}
                              price={Number(item.price)}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            // regular grid mapped for md upwards
            <div className='products-grid mt-6 m-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
              {store.map((product) => (
                <div key={product._id} className='z-40'>
                  <Link
                    key={product._id}
                    href={`/products/${product.slug}`}
                    className='products hover:scale-105 transition'
                    style={{ display: 'block' }}
                  >
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={750}
                        height={300}
                        className='border border-gray-500 mb-4'
                        // onClick={pageScroll()}
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
                          <ItemCard
                            index={i}
                            {...item}
                            price={Number(item.price)}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};
// settings for the react-slick carousel
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default StoreFront;
