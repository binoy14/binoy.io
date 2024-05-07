import { getProjects, type Project } from '$lib/groq/getProjects';
import { sanityClient } from '$lib/sanityClient';

export async function load() {
  const projects = await sanityClient.fetch<Project[]>(getProjects);

  return { projects };
}
