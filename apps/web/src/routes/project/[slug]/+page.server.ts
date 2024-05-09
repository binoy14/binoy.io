import { getProjectBySlug } from '$lib/groq/getProjectBySlug';
import type { GetProjectBySlugResult } from '$lib/groq/sanity.types.js';
import { sanityClient } from '$lib/sanityClient';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const project = await sanityClient.fetch<GetProjectBySlugResult>(getProjectBySlug, {
    slug: params.slug,
  });

  if (!project) {
    return error(404, {
      message: 'Project not found',
    });
  }

  return {
    project,
  };
}
