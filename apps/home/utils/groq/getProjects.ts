import groq from "groq";

import type { Asset, Slug } from "./types";

export const getProjects = groq`*[_type == "projects" && id == $id] {
  "projects": projects[]-> {
    _id,
    featuredImage,
    featuredDescription,
    title,
    slug
  }
}[0]`;

export interface GetProjects {
  projects: Project[];
}

export interface Project {
  _id: string;
  featuredDescription: string;
  featuredImage: FeaturedImage;
  slug: Slug;
  title: string;
}

export interface FeaturedImage {
  _type: string;
  alt: string;
  asset: Asset;
}
