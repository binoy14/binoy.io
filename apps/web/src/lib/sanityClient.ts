import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

export const sanityClient = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: '2024-05-05',
  useCdn: true,
});

export const imageBuilder = imageUrlBuilder(sanityClient);
