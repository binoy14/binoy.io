<script lang="ts">
  import '../app.css';
  import { Footer } from '@binoy/ui';
  import Navigation from '$lib/Navigation.svelte';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import { injectSpeedInsights } from '@vercel/speed-insights';
  import { PreviewMode, QueryLoader, VisualEditing } from '@sanity/sveltekit';
  import { sanityClient } from '$lib/sanityClient';
  import type { NavLinks } from '$lib/navigationTypes';
  import type { LayoutProps } from './$types';

  let { children, data }: LayoutProps = $props();
  // svelte-ignore state_referenced_locally
  const { previewEnabled } = data;

  inject({ mode: dev ? 'development' : 'production' });
  injectSpeedInsights({});

  const links: NavLinks[] = [
    {
      text: 'Home',
      link: '',
    },
    {
      text: 'Blogs',
      link: 'blogs',
    },
    {
      text: 'Contact',
      link: 'contact',
    },
  ];

  const seoData = {
    title: 'Binoy Patel',
    description:
      'Full Stack Engineer crafting scalable, user-centric software solutions with 10+ years of hands-on expertise.',
    canonical: 'https://www.binoy.io',
  };
</script>

<svelte:head>
  <title>{seoData.title}</title>
  <meta property="og:type" content="website" />
  <link rel="canonical" href={seoData.canonical} />
  <meta name="description" content={seoData.description} />
  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:url" content={seoData.canonical} />
  <meta property="og:site_name" content={seoData.title} />
</svelte:head>

<PreviewMode enabled={previewEnabled}>
  <VisualEditing enabled={previewEnabled}>
    <QueryLoader enabled={previewEnabled} client={sanityClient}>
      <Navigation {links} title="Binoy Patel" />

      <main class="min-h-full min-w-full">
        {@render children?.()}
      </main>

      <Footer />
    </QueryLoader>
  </VisualEditing>
</PreviewMode>
