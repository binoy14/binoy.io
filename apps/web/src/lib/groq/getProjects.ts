import groq from 'groq';

// Order follows the homepage's curated array. Projects not listed are excluded.
export const getProjects = groq`*[_type == "homepage"][0].projects[]-> {
  _id,
  featuredImage {
    asset -> {
      ...,
    }
  },
  featuredDescription,
  title,
  slug
}`;
