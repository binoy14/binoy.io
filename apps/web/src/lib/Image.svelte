<script lang="ts">
  import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
  import { imageBuilder } from './sanityClient';

  export let src: SanityImageSource | null;
  export let height: number;
  export let width: number;
  export let alt: string | undefined;
  export let className: string | undefined = '';

  export let imgComp: HTMLImageElement | null = null;
</script>

{#if src}
  <img
    {alt}
    bind:this={imgComp}
    loading="lazy"
    class={className}
    {height}
    {width}
    src={imageBuilder.image(src).width(width).quality(75).auto('format').url().toString()}
  />
{/if}
