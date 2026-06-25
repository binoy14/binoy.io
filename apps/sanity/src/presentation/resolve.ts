import { defineLocations, type PresentationPluginOptions } from 'sanity/presentation';

import { getPreviewPath } from './previewPath';

// Tells the Presentation tool where each document is rendered on the web app,
// enabling navigation between the Structure and Presentation tools.
export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    homepage: defineLocations({
      resolve: () => ({
        locations: [{ title: 'Home', href: '/' }],
      }),
    }),
    blog: defineLocations({
      select: { title: 'title', slug: 'slug.current' },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled blog',
            href: getPreviewPath('blog', doc?.slug) ?? '/blogs',
          },
          { title: 'Blogs index', href: `/blogs` },
        ],
      }),
    }),
    project: defineLocations({
      select: { title: 'title', slug: 'slug.current' },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled project',
            href: getPreviewPath('project', doc?.slug) ?? '/',
          },
          { title: 'Home', href: `/` },
        ],
      }),
    }),
  },
};
