import groq from 'groq';

export const getProjectBySlug = groq`*[_type == "project" && slug.current == $slug && !(_id in path("drafts.**"))] {
  _id,
  title,
  description,
  slug,
  "projectImages": projectImages[]-> {
    _id,
    alt,
    caption,
    image {
      asset->{
        ...,
      }
    }
  }
}[0]`;
