import groq from "groq";

export const getBlogBySlug = groq`*[_type == "blog" && slug.current == $slug] {
  title,
  publishedAt,
  body
}[0]`;

export interface GetBlogBySlug {
  title: string;
  publishedAt: string;
  body: any;
}
