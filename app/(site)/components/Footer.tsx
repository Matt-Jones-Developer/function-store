import Link from 'next/link';

const Footer = () => {
  return (
    <>
      {/* footer gray-800 */}
      <footer
        className='footer flex flex-col justify-center items-center mx-auto
            bg-gray-800 text-white font-light py-20 m-0 gap-16'
      >
        {/* footer top cols */}
        <div
          className='grid grid-cols-1 md:grid-cols-3
              justify-center justify-items-center w-full mx-auto 
              max-w-5xl mt-0 m-4 ml-8 md:m-8 md:ml-32 lg:ml-8'
        >
          {/* company column */}
          <div className='footer__company w-full lg:w-1/3 mx-0'>
            <h2 className='text-2xl tracking-wide font-extralight mb-6'>
              Company
            </h2>
            <ul className='footer-items text-opacity-50 mb-8'>
              <li>
                <Link href='/'>VIP Lounge Rewards</Link>
              </li>
              <li>
                <Link href='/'>Reviews</Link>
              </li>
              <li>
                <Link href='/'>Sustainability</Link>
              </li>
              <li>
                <Link href='/'>Recycling Scheme</Link>
              </li>
              <li>
                <Link href='/'>About Us</Link>
              </li>
              <li>
                <Link href='/'>Become an Affiliate</Link>
              </li>
              <li>
                <Link href='/'>Careers</Link>
              </li>
              <li>
                <Link href='/'>Stockists</Link>
              </li>
            </ul>
          </div>
          {/* Get Help column */}
          <div className='footer__help w-full lg:w-1/3 mx-0'>
            <h2 className='text-2xl tracking-wide font-extralight mb-6'>
              Get Help
            </h2>
            <ul className='footer-items text-opacity-50 mb-8'>
              <li>
                <Link href='/'>Contact Us</Link>
              </li>
              <li>
                <Link href='/'>FAQs</Link>
              </li>
              <li>
                <Link href='/'>Shipping Information</Link>
              </li>
              <li>
                <Link href='/'>Return Policy</Link>
              </li>
            </ul>
          </div>
          {/* account column */}
          <div className='footer__account w-full lg:w-1/3 mx-0'>
            <h2 className='text-2xl tracking-wide font-extralight mb-6'>
              Account
            </h2>
            <ul className='footer-items text-opacity-50'>
              <li>
                <Link href='/'>Login</Link>
              </li>
              <li>
                <Link href='/'>Signup</Link>
              </li>
              <li>
                <Link href='/'>Redeem a Gift Card</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='relative flex flex-nowrap justify-center w-full mx-auto'>
          <div className='absolute flex footer__bottom gap-4 items-center bottom-0'>
            <p>&copy; Function 2023</p>
            <Link className='map' href='/'>
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
