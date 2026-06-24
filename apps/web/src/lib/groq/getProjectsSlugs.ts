import groq from 'groq';

// Only projects listed on the homepage are reachable.
export const getProjectSlugs = groq`*[_type == "homepage"][0].projects[]-> {
  slug
}`;
