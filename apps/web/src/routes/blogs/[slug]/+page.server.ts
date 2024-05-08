import { getBlogBySlug, type GetBlogBySlug } from '$lib/groq/getBlogBySlug';
import { sanityClient } from '$lib/sanityClient';

export async function load({ params }) {
  const blog = await sanityClient.fetch<GetBlogBySlug>(getBlogBySlug, {
    slug: params.slug,
  });

  return {
    blog,
  };
}
