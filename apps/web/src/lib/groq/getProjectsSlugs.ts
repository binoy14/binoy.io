import groq from 'groq';

import type { Slug } from './types';

export const getProjectSlugs = groq`*[_type == "project" && !(_id in path("drafts.**"))] {
  slug
}`;

export interface GetProjectSlug {
  slug: Slug;
}
