import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer
        className='footer flex flex-col justify-center items-center mx-auto
            bg-slate text-white font-light py-8 gap-16 pb-16'
      >
        {/* footer top cols */}
        <div
          className='grid grid-cols-1 md:grid-cols-3
              justify-center justify-items-center w-full mx-auto 
              max-w-5xl m-4 md:m-8 ml-8 md:ml-32 lg:ml-8'
        >
          {/* account column */}
          <div className='footer__account w-full lg:w-1/3 mb-8'>
            <h2 className='text-md tracking-wide font-extralight mb-2'>
              Account
            </h2>
            <ul className='footer-items text-whiteFade'>
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
          {/* company column */}
          <div className='footer__company w-full lg:w-1/3 mb-8'>
            <h2 className='text-md tracking-wide font-extralight mb-2'>
              Company
            </h2>
            <ul className='footer-items text-whiteFade'>
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
          <div className='footer__help w-full lg:w-1/3 mb-8'>
            <h2 className='text-md tracking-wide font-extralight mb-2'>
              Get Help
            </h2>
            <ul className='footer-items text-whiteFade'>
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
        </div>
        <div className='relative flex flex-nowrap justify-center w-full mx-auto -mt-12'>
          {/* hr line */}
          <div className='border-t border-gray-600 m-8 -mt-2 w-full h-2 md:w-1/2 lg:w-2/3'></div>
          <div className='absolute flex footer__bottom gap-6 items-center top-8 text-xs'>
            <p className='copyright'>&copy; Function 2023</p>
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
