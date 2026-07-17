import groq from 'groq';

export const getBlogSlugs = groq`*[_type == "blog" && defined(slug.current)] {
  "slug": slug.current,
  publishedAt
} | order(publishedAt desc)`;
