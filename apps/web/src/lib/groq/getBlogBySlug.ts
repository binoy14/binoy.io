import groq from 'groq';

export const getBlogBySlug = groq`*[_type == "blog" && slug.current == $slug] {
  title,
  excerpt,
  slug,
  publishedAt,
  "readingTime": round(length(pt::text(body)) / 5 / 200 ),
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
