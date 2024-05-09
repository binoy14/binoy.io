import { getProjects } from '$lib/groq/getProjects';
import type { GetProjectsResult } from '$lib/groq/sanity.types';
import { sanityClient } from '$lib/sanityClient';

export async function load() {
  const projects = await sanityClient.fetch<GetProjectsResult>(getProjects);

  return { projects };
}
