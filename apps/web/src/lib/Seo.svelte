<script lang="ts">
  import { page } from '$app/state';
  import { SITE_NAME, SITE_TITLE_SEPARATOR, DEFAULT_DESCRIPTION, absoluteUrl } from '$lib/seo';

  interface Props {
    /** Page-specific title; the site name is appended automatically. */
    title?: string;
    description?: string;
    /** Overrides the canonical URL (defaults to the production URL for the current path). */
    canonical?: string;
    image?: string;
    type?: 'website' | 'article';
    publishedAt?: string;
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  }

  let {
    title,
    description = DEFAULT_DESCRIPTION,
    canonical,
    image,
    type = 'website',
    publishedAt,
    jsonLd,
  }: Props = $props();

  const fullTitle = $derived(title ? `${title}${SITE_TITLE_SEPARATOR}${SITE_NAME}` : SITE_NAME);
  const canonicalUrl = $derived(canonical ?? absoluteUrl(page.url.pathname));

  // Serialize JSON-LD, escaping "<" so a closing script tag in the data can't break out.
  const jsonLdString = $derived(jsonLd ? JSON.stringify(jsonLd).replace(/</g, '\\u003c') : null);
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />

  <meta property="og:type" content={type} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:site_name" content={SITE_NAME} />
  {#if image}
    <meta property="og:image" content={image} />
  {/if}
  {#if type === 'article' && publishedAt}
    <meta property="article:published_time" content={publishedAt} />
  {/if}

  <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  {#if image}
    <meta name="twitter:image" content={image} />
  {/if}

  {#if jsonLdString}
    <!-- eslint-disable-next-line svelte/no-at-html-tags, no-useless-escape -- JSON-LD injection; "<" is escaped in jsonLdString so the data cannot break out, and the \/ keeps the Svelte parser from ending the tag early -->
    {@html `<script type="application/ld+json">${jsonLdString}<\/script>`}
  {/if}
</svelte:head>
