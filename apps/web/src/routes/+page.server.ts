import { getProjects } from '$lib/groq/getProjects';
import type { GetProjectsResult } from '$lib/groq/sanity.types';

export async function load({ locals }) {
  const initial = await locals.sanity.loadQuery<GetProjectsResult>(getProjects);

  return { query: getProjects, options: { initial } };
}
