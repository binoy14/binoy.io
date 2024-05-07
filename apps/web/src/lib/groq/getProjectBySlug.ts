import type { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types';
import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import groq from 'groq';

import type { Slug } from './types';

export const getProjectBySlug = groq`*[_type == "project" && slug.current == $slug && !(_id in path("drafts.**"))] {
  _id,
  title,
  description,
  slug,
  "projectImages": projectImages[]-> {
    _id,
    alt,
    caption,
    image {
      asset->{
        ...,
      }
    }
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
  asset: SanityAsset;
  caption?: string;
}
