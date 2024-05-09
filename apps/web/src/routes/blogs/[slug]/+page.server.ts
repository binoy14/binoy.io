import { getBlogBySlug } from '$lib/groq/getBlogBySlug';
import type { GetBlogBySlugResult } from '$lib/groq/sanity.types.js';
import { sanityClient } from '$lib/sanityClient';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const blog = await sanityClient.fetch<GetBlogBySlugResult>(getBlogBySlug, {
    slug: params.slug,
  });

  if (!blog) {
    return error(404, {
      message: 'Blog not found',
    });
  }

  return {
    blog,
  };
}
