<script lang="ts">
  import BlockContent from '$lib/blockContent/BlockContent.svelte';
  import { imageBuilder } from '$lib/sanityClient.js';
  import { Image } from '@unpic/svelte';
  import { resolve } from '$app/paths';
  import { useQuery, stegaClean } from '@sanity/sveltekit';
  import type { GetProjectBySlugResult } from '$lib/groq/sanity.types';
  import Seo from '$lib/Seo.svelte';
  import { absoluteUrl } from '$lib/seo';

  let { data } = $props();
  const query = $derived(useQuery<GetProjectBySlugResult>(data));
  const project = $derived($query.data);

  const canonical = $derived(
    project?.slug ? absoluteUrl(`/project/${stegaClean(project.slug.current)}`) : undefined,
  );
</script>

{#if project}
  <Seo
    title={stegaClean(project.title)}
    description={project.featuredDescription ? stegaClean(project.featuredDescription) : undefined}
    {canonical}
    image={project.featuredImage?.asset?.url ?? undefined}
  />
{/if}

{#if project}
  <div class="container max-w-3xl pt-14 pb-20">
    <a
      href={resolve('/')}
      class="text-terminal-muted font-mono text-[13px] transition-colors hover:text-[#8ff2ae]"
    >
      &larr; cd ~/projects
    </a>

    <p class="text-terminal-accent mt-6 font-mono text-sm">$ cat project.json</p>
    <h1 class="mt-3.5 font-mono text-4xl font-bold">{project.title}</h1>

    {#if project.featuredDescription}
      <p class="text-terminal-text mt-5 max-w-xl text-base leading-relaxed">
        {project.featuredDescription}
      </p>
    {/if}

    {#if project.description}
      <div class="mt-9">
        <BlockContent value={project.description} />
      </div>
    {/if}

    {#if project.projectImages}
      <div class="mt-13 grid gap-11">
        {#each project.projectImages as projectImage (projectImage._key)}
          <div>
            {#if projectImage.caption}
              <p class="text-terminal-muted font-mono text-[13px]">// {projectImage.caption}</p>
            {/if}
            <div class="border-terminal-border mt-3.5 overflow-hidden rounded-lg border">
              <Image
                priority={false}
                class="w-full"
                layout="fullWidth"
                src={imageBuilder.image(projectImage.image).fit('max').url().toString()}
                alt={projectImage.alt || ''}
              />
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
{/if}
