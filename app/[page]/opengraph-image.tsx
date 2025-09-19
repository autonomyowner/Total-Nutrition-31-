// Temporarily disabled due to path issues with spaces in directory name
// import OpengraphImage from 'components/opengraph-image';
// import { getPage } from 'lib/shopify';

export default async function Image({ params }: { params: { page: string } }) {
  // const page = await getPage(params.page);
  // const title = page.seo?.title || page.title;
  // return await OpengraphImage({ title });
  return new Response('Opengraph image temporarily disabled', { status: 404 });
}
