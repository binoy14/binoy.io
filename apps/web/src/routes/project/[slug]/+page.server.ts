import { getProjectBySlug } from '$lib/groq/getProjectBySlug';
import type { GetProjectBySlugResult } from '$lib/groq/sanity.types.js';
import { error } from '@sveltejs/kit';

export async function load({ locals, params }) {
  const initial = await locals.sanity.loadQuery<GetProjectBySlugResult>(getProjectBySlug, {
    slug: params.slug,
  });

  if (!initial.data) {
    return error(404, {
      message: 'Project not found',
    });
  }

  return {
    query: getProjectBySlug,
    params: { slug: params.slug },
    options: { initial },
  };
}
