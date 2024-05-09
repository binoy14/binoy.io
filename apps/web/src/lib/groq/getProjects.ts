import groq from 'groq';

export const getProjects = groq`*[_type == "project" && !(_id in path("drafts.**"))] {
  _id,
  featuredImage {
    asset -> {
      ...,
    }
  },
  featuredDescription,
  title,
  slug,
  order
} | order(order asc)`;
