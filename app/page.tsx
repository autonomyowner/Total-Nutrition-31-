import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { MovingProductCards } from 'components/moving-product-cards';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
      <MovingProductCards />
      <Footer />
    </>
  );
}
