import groq from "groq";

export const getBlogBySlug = groq`*[_type == "blog" && slug.current == $slug] {
  title,
  publishedAt,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  }
}[0]`;

export interface GetBlogBySlug {
  title: string;
  publishedAt: string;
  body: any;
}
