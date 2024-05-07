import { getBlogs, type GetBlogs } from '$lib/groq/getBlogs';
import { sanityClient } from '$lib/sanityClient';

export async function load() {
  const blogs = await sanityClient.fetch<GetBlogs>(getBlogs);

  return {
    blogs
  };
}
