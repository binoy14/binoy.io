import { ArbitraryTypedObject, PortableTextBlock } from "@portabletext/types";
import groq from "groq";

import type { Asset, Slug } from "./types";
export const getProjectBySlug = groq`*[_type == "project" && slug.current == $slug] {
  _id,
  title,
  description,
  slug,
  "projectImages": projectImages[]-> {
    _id,
    alt,
    caption,
    image
  }
}[0]`;

type T = PortableTextBlock | ArbitraryTypedObject;

export interface GetProjectBySlug {
  _id: string;
  description: T | T[];
  projectImages: ProjectImage[];
  slug: Slug;
  title: string;
}

export interface ProjectImage {
  _id: string;
  alt: string;
  caption: string;
  image: Image;
}

export interface Image {
  _type: string;
  alt?: string;
  asset: Asset;
  caption?: string;
}
