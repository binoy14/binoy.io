<script lang="ts">
  import BlockContent from '$lib/blockContent/BlockContent.svelte';
  import { imageBuilder } from '$lib/sanityClient.js';
  import { Image } from '@unpic/svelte';
  import { useQuery } from '@sanity/sveltekit';
  import type { GetProjectBySlugResult } from '$lib/groq/sanity.types';

  let { data } = $props();
  const query = $derived(useQuery<GetProjectBySlugResult>(data));
  const project = $derived($query.data);
</script>

<div class="container mb-10 grid gap-5">
  <h1 class="text-2xl font-bold">{project?.title}</h1>
  {#if project?.description}
    <BlockContent value={project.description} />
  {/if}

  {#if project?.projectImages}
    {#each project.projectImages as projectImage (projectImage._id)}
      <div class="grid justify-center gap-5">
        <h3 class="text-center text-lg font-bold">{projectImage.caption}</h3>
        <Image
          width={800}
          height={600}
          priority={false}
          class="w-full object-contain!"
          layout="fixed"
          src={imageBuilder.image(projectImage.image).fit('max').url().toString()}
          alt={projectImage.alt || ''}
        />
      </div>
    {/each}
  {/if}
</div>
