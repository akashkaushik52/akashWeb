import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';
const client = sanityClient({
  projectId: 'gqvsdfcw',
  dataset: 'production',
  useCdn: true,
  apiVersion: 'v1',
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
export default client;
