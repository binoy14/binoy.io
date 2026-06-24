import groq from 'groq';

// Only resolves projects referenced by the homepage collection; unlisted slugs 404.
export const getProjectBySlug = groq`*[
  _type == "project"
  && slug.current == $slug
  && !(_id in path("drafts.**"))
  && _id in *[_type == "homepage"][0].projects[]._ref
] {
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
