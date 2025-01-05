<script lang="ts">
  import BlockContent from '$lib/blockContent/BlockContent.svelte';
  import { imageBuilder } from '$lib/sanityClient.js';
  import { Image } from '@unpic/svelte';

  let { data } = $props();
</script>

<div class="container mb-10 grid gap-5">
  <h1 class="text-2xl font-bold">{data.project?.title}</h1>
  {#if data.project.description}
    <BlockContent value={data.project.description} />
  {/if}

  {#if data.project.projectImages}
    {#each data?.project?.projectImages as projectImage}
      <div class="grid justify-center gap-5">
        <h3 class="text-lg font-bold">{projectImage.caption}</h3>
        <Image
          width={800}
          height={600}
          priority={false}
          class="w-full"
          layout="constrained"
          src={imageBuilder.image(projectImage.image).url().toString()}
          background={projectImage.image.asset?.metadata?.lqip}
          alt={projectImage.alt || ''}
        />
      </div>
    {/each}
  {/if}
</div>
