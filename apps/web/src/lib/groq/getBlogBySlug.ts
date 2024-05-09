import groq from 'groq';

export const getBlogBySlug = groq`*[_type == "blog" && slug.current == $slug] {
  title,
  publishedAt,
  body[]{
    ...,
    _type == "image" => {
      "asset": @.asset->{
        ...
      }
    },
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  }
}[0]`;
