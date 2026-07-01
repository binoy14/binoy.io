<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';
  import { resolve } from '$app/paths';
  import { stegaClean } from '@sanity/sveltekit';

  interface Props {
    portableText: MarkComponentProps<{
      href?: string;
      slug?: { current: string };
      text?: string;
      blank?: boolean;
    }>;
    children?: import('svelte').Snippet;
  }

  let { portableText, children }: Props = $props();

  let { value, markType } = $derived(portableText);
  let { href, blank, slug } = $derived(value);

  // href/slug are used as URL attributes — strip stega markers so the URLs
  // aren't corrupted by the invisible characters added in preview mode.
  let cleanHref = $derived(href ? stegaClean(href) : '');
  let cleanSlug = $derived(slug?.current ? stegaClean(slug.current) : '');

  // `resolve` only accepts internal pathnames; external URLs are used directly.
  let isInternal = $derived(cleanHref.startsWith('/'));
</script>

{#if markType === 'internalLink'}
  <a href={resolve(`/blogs/${cleanSlug}`)}>{@render children?.()}</a>
{:else if blank}
  <a href={cleanHref} target="_blank" rel="external noopener noreferrer">{@render children?.()}</a>
{:else if isInternal}
  <a href={resolve(cleanHref as '/')}>{@render children?.()}</a>
{:else}
  <a href={cleanHref} rel="external noopener noreferrer">{@render children?.()}</a>
{/if}
