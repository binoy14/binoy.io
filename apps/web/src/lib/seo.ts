// Central SEO configuration and structured-data helpers.
// Canonical/OG URLs always use the production origin so preview and
// deploy URLs never leak into indexable metadata.

export const SITE_URL = 'https://www.binoy.io';
export const SITE_NAME = 'Binoy Patel';
export const SITE_TITLE_SEPARATOR = ' - ';
export const DEFAULT_DESCRIPTION =
  'Full Stack Engineer crafting scalable, user-centric software solutions with 10+ years of hands-on expertise.';

/** Build an absolute, production-origin URL from a pathname. */
export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE_URL).href;
}

/** JSON-LD describing the site owner. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: 'Full Stack Engineer',
    description: DEFAULT_DESCRIPTION,
  };
}

/** JSON-LD describing the website itself. */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

/** JSON-LD for a single blog post. */
export function blogPostingJsonLd({
  title,
  description,
  url,
  publishedAt,
}: {
  title: string;
  description?: string;
  url: string;
  publishedAt?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    ...(description ? { description } : {}),
    url,
    ...(publishedAt ? { datePublished: publishedAt, dateModified: publishedAt } : {}),
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
