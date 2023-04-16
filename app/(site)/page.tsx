import Header from './components/Header';
import StoreFront from './components/StoreFront';
import FeaturedProducts from './components/FeaturedProducts';
import GiftSectionCTA from './components/GiftSectionCTA';
import Footer from './components/Footer';
// import '../lib/alpinejs';

// components imported to SPA
export default function Home() {
  return (
    <>
      <Header isFullScreen={false} />
      <StoreFront />
      <FeaturedProducts />
      <GiftSectionCTA />
      <Footer />
    </>
  );
}
