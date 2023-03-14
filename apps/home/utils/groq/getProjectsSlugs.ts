import groq from "groq";

import type { Slug } from "./types";

export const getProjectSlugs = groq`*[_type == "project"] {
  slug
}`;

export interface GetProjectSlug {
  slug: Slug;
}
