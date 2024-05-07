<script lang="ts">
  import { Footer } from '@binoy/ui';
  import '../app.css';
  import Navigation from '$lib/Navigation.svelte';
  import type { NavLinks } from '$lib/navigationTypes';

  const links: NavLinks[] = [
    {
      text: 'Home',
      link: ''
    },
    {
      text: 'Blogs',
      link: 'blogs'
    },
    {
      text: 'Contact',
      link: 'contact'
    }
  ];
</script>

<Navigation {links} title="Binoy Patel" />

<main class="min-h-full min-w-full">
  <slot />
</main>

<Footer />
