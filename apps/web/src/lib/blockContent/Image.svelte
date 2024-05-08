<script lang="ts">
  import Image from '$lib/Image.svelte';
  import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
  import type { CustomBlockComponentProps } from '@portabletext/svelte';

  export let portableText: CustomBlockComponentProps<{
    asset: SanityImageSource;
    alt: string;
  }>;

  $: ({ value } = portableText);
</script>

<Image width={600} height={400} className="m-auto" src={value.asset} alt={value.alt} />
