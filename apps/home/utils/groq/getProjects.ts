import { SanityAsset } from "@sanity/image-url/lib/types/types";
import groq from "groq";

import type { Slug } from "./types";
export const getProjects = groq`*[_type == "project" && !(_id in path("drafts.**"))] {
  _id,
  featuredImage {
    asset -> {
      ...,
    }
  },
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
  asset: SanityAsset;
}
