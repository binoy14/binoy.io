<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';

  export let portableText: MarkComponentProps<{
    href?: string;
    slug?: { current: string };
    text?: string;
    blank?: boolean;
  }>;

  $: ({ value, markType } = portableText);
  $: ({ href, blank, slug } = value);

  $: {
    console.log(portableText, href, blank);
  }
</script>

{#if markType === 'internalLink'}
  <a href={`/blogs/${slug?.current}`}><slot /></a>
{:else if blank}
  <a {href} target="_blank" rel="noopener noreferrer"><slot /></a>
{:else}
  <a {href}><slot /></a>
{/if}
