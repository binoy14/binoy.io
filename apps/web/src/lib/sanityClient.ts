import { createClient } from '@sanity/sveltekit';
import imageUrlBuilder from '@sanity/image-url';
import {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_STUDIO_URL,
} from '$env/static/public';

export const sanityClient = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: '2024-05-05',
  useCdn: true,
  stega: { studioUrl: PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333' },
});

export const imageBuilder = imageUrlBuilder(sanityClient);
