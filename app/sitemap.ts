import { getCollections, getPages, getProducts } from 'lib/data';
import { baseUrl, validateEnvironmentVariables } from 'lib/utils';
import { MetadataRoute } from 'next';

type Route = {
  url: string;
  lastModified: string;
};

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  validateEnvironmentVariables();

  const routesMap = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));

  const collections = getCollections().map((collection) => ({
    url: `${baseUrl}/search/${collection.handle}`,
    lastModified: new Date().toISOString()
  }));

  const products = getProducts({}).map((product) => ({
    url: `${baseUrl}/product/${product.handle}`,
    lastModified: new Date().toISOString()
  }));

  const pages = getPages().map((page) => ({
    url: `${baseUrl}/${page.handle}`,
    lastModified: page.updatedAt
  }));

  const fetchedRoutes: Route[] = [...collections, ...products, ...pages];

  return [...routesMap, ...fetchedRoutes];
}
