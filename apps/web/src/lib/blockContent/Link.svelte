<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';

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
</script>

{#if markType === 'internalLink'}
  <a href={`/blogs/${slug?.current}`}>{@render children?.()}</a>
{:else if blank}
  <a {href} target="_blank" rel="noopener noreferrer">{@render children?.()}</a>
{:else}
  <a {href}>{@render children?.()}</a>
{/if}
