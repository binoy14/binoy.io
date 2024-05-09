<script lang="ts">
  import BlockContent from '$lib/blockContent/BlockContent.svelte';
  import Image from '$lib/Image.svelte';

  export let data;
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
          src={projectImage.image}
          alt={projectImage.alt || ''}
          width={800}
          height={400}
          className="w-full"
        />
      </div>
    {/each}
  {/if}
</div>
