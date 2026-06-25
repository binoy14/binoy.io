import { getBlogs } from '$lib/groq/getBlogs';
import type { GetBlogsResult } from '$lib/groq/sanity.types';

export async function load({ locals }) {
  const initial = await locals.sanity.loadQuery<GetBlogsResult>(getBlogs);

  return { query: getBlogs, options: { initial } };
}
