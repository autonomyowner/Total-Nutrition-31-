// Temporarily disabled due to path issues with spaces in directory name
// import OpengraphImage from 'components/opengraph-image';

export default async function Image() {
  // return await OpengraphImage();
  return new Response('Opengraph image temporarily disabled', { status: 404 });
}
