import groq from 'groq';

const projectFields = `
  _id,
  title,
  description,
  featuredDescription,
  featuredImage {
    asset -> {
      url,
    }
  },
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
`;

// Only resolves projects referenced by the homepage collection; unlisted slugs 404.
export const getProjectBySlug = groq`*[
  _type == "project"
  && slug.current == $slug
  && !(_id in path("drafts.**"))
  && _id in *[_type == "homepage"][0].projects[]._ref
] {
  ${projectFields}
}[0]`;

// Preview-mode variant: drops the draft and homepage-listing restrictions so a
// project can be previewed before it's published and added to the homepage.
export const getProjectBySlugPreview = groq`*[
  _type == "project"
  && slug.current == $slug
] {
  ${projectFields}
}[0]`;
