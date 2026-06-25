import { getBlogBySlug } from '$lib/groq/getBlogBySlug';
import type { GetBlogBySlugResult } from '$lib/groq/sanity.types.js';
import { error } from '@sveltejs/kit';

export async function load({ locals, params }) {
  const initial = await locals.sanity.loadQuery<GetBlogBySlugResult>(getBlogBySlug, {
    slug: params.slug,
  });

  if (!initial.data) {
    return error(404, {
      message: 'Blog not found',
    });
  }

  return {
    query: getBlogBySlug,
    params: { slug: params.slug },
    options: { initial },
  };
}
