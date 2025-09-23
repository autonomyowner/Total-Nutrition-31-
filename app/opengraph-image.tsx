export default async function Image() {
  try {
    const { default: OpengraphImage } = await import(
      'components/opengraph-image'
    );
    return await OpengraphImage();
  } catch (error) {
    console.error('Failed to generate Open Graph image', error);
    return new Response('Opengraph image temporarily unavailable', {
      status: 500
    });
  }
}
