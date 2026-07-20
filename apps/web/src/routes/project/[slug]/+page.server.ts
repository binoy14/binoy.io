import { getProjectBySlug, getProjectBySlugPreview } from '$lib/groq/getProjectBySlug';
import type { GetProjectBySlugResult } from '$lib/groq/sanity.types.js';
import { error } from '@sveltejs/kit';

export async function load({ locals, params }) {
  const query = locals.sanity.previewEnabled ? getProjectBySlugPreview : getProjectBySlug;
  const initial = await locals.sanity.loadQuery<GetProjectBySlugResult>(query, {
    slug: params.slug,
  });

  if (!initial.data) {
    return error(404, {
      message: 'Project not found',
    });
  }

  return {
    query,
    params: { slug: params.slug },
    options: { initial },
  };
}
