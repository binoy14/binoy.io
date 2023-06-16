import groq from "groq";

import type { Asset, Slug } from "./types";

export const getProjects = groq`*[_type == "project" && !(_id in path("drafts.**"))] {
  _id,
  featuredImage,
  featuredDescription,
  title,
  slug,
  order
} | order(order asc)`;

export interface GetProjects {
  projects: Project[];
}

export interface Project {
  _id: string;
  featuredDescription: string;
  featuredImage: FeaturedImage;
  slug: Slug;
  title: string;
  order: number;
}

export interface FeaturedImage {
  _type: string;
  alt: string;
  asset: Asset;
}
