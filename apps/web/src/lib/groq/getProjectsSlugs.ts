import groq from 'groq';

export const getProjectSlugs = groq`*[_type == "project" && !(_id in path("drafts.**"))] {
  slug
}`;
