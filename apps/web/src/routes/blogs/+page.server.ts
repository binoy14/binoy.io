import { getBlogs } from '$lib/groq/getBlogs';
import type { GetBlogsResult } from '$lib/groq/sanity.types';
import { sanityClient } from '$lib/sanityClient';

export async function load() {
  const blogs = await sanityClient.fetch<GetBlogsResult>(getBlogs);

  return {
    blogs,
  };
}
