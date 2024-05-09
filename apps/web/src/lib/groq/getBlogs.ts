import groq from 'groq';

export const getBlogs = groq`*[_type == "blog"] {
  title,
  excerpt,
  slug,
  publishedAt,
  "readingTime": round(length(pt::text(body)) / 5 / 200 )
} | order(publishedAt desc)`;
