import { PortableTextProps } from "@portabletext/react";
import groq from "groq";

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

export interface GetBlogBySlug {
  title: string;
  publishedAt: string;
  body: PortableTextProps["value"];
}
