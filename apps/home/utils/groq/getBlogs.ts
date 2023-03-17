import groq from "groq";

import { Slug } from "./types";

export const getBlogs = groq`*[_type == "blog"] {
  title,
  description,
  slug,
  publishedAt,
} | order(title asc)`;

export type GetBlogs = GetBlog[];

export interface GetBlog {
  title: string;
  description: string;
  publishedAt: string;
  slug: Slug;
}
