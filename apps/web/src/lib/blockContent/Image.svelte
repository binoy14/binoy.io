<script lang="ts">
  import type { CustomBlockComponentProps } from '@portabletext/svelte';
  import { Image } from '@unpic/svelte';
  import type { SanityImageAsset } from '$lib/groq/sanity.types';

  export let portableText: CustomBlockComponentProps<{
    asset: SanityImageAsset;
    alt: string;
  }>;

  $: ({ value } = portableText);
</script>

{#if value.asset.url}
  <Image
    width={600}
    height={400}
    priority={false}
    class="m-auto"
    src={value.asset.url}
    background={value.asset.metadata?.lqip}
    alt={value.alt}
  />
{/if}
