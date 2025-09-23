import { getCollectionProducts, getProducts } from 'lib/data';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  let products = await getCollectionProducts({
    collection: 'hidden-homepage-carousel'
  });

  if (!products.length) {
    products = getCollectionProducts({
      collection: 'hidden-homepage-featured-items'
    });
  }

  if (!products.length) {
    products = getProducts().slice(0, 8);
  }

  const uniqueProducts = Array.from(
    new Map(products.map((product) => [product.handle, product])).values()
  );

  if (!uniqueProducts.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [
    ...uniqueProducts,
    ...uniqueProducts,
    ...uniqueProducts
  ];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link
              href={`/product/${product.handle}`}
              className="relative h-full w-full"
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
