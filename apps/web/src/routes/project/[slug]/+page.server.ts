import { getProjectBySlug, type GetProjectBySlug } from '$lib/groq/getProjectBySlug';
import { sanityClient } from '$lib/sanityClient';

export async function load({ params }) {
  const project = await sanityClient.fetch<GetProjectBySlug>(getProjectBySlug, {
    slug: params.slug
  });

  return {
    project
  };
}
