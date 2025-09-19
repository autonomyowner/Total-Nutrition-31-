import { getProducts } from 'lib/data';
import type { Product } from 'lib/types';
import Link from 'next/link';
import Price from './price';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex-shrink-0 w-80 mx-4">
      <Link
        href={`/product/${product.handle}`}
        className="block bg-white dark:bg-neutral-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <div className="relative h-48 w-full">
          <img
            src={product.featuredImage.url}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              className="text-xl font-bold text-blue-600 dark:text-blue-400"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export async function MovingProductCards() {
  // Get all products for the moving cards
  const products = getProducts();

  if (!products.length) return null;

  // Duplicate products to create seamless loop
  const duplicatedProducts = [...products, ...products];

  return (
    <section className="py-12 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Our Products
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedProducts.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
