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
</script>

<PreviewMode enabled={previewEnabled}>
  <VisualEditing enabled={previewEnabled}>
    <QueryLoader enabled={previewEnabled} client={sanityClient}>
      <div class="flex min-h-screen flex-col">
        <Navigation {links} title="Binoy Patel" />

        <main class="min-w-full flex-1">
          {@render children?.()}
        </main>

        <Footer />
      </div>
    </QueryLoader>
  </VisualEditing>
</PreviewMode>
