import groq from 'groq';

import type { Slug } from './types';

export const getBlogs = groq`*[_type == "blog"] {
  title,
  excerpt,
  slug,
  publishedAt,
  "readingTime": round(length(pt::text(body)) / 5 / 200 )
} | order(publishedAt desc)`;

export type GetBlogs = GetBlog[];

export interface GetBlog {
  title: string;
  excerpt: string;
  publishedAt: string;
  slug: Slug;
  readingTime: number;
}
