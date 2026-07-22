<script lang="ts">
  import { Image } from '@unpic/svelte';
  import { resolve } from '$app/paths';
  import { useQuery, stegaClean } from '@sanity/sveltekit';
  import type { GetProjectsResult } from '$lib/groq/sanity.types';
  import Seo from '$lib/Seo.svelte';
  import { personJsonLd, websiteJsonLd } from '$lib/seo';

  let { data } = $props();
  const query = $derived(useQuery<GetProjectsResult>(data));
  const projects = $derived($query.data ?? []);
</script>

<Seo jsonLd={[personJsonLd(), websiteJsonLd()]} />

<div class="relative overflow-hidden">
  <div
    class="pointer-events-none absolute inset-0"
    style="background-image:repeating-linear-gradient(0deg,rgb(110 231 150 / 2.5%) 0px,rgb(110 231 150 / 2.5%) 1px,transparent 1px,transparent 3px)"
  ></div>
  <div class="relative container py-16 sm:py-20">
    <p class="text-terminal-accent font-mono text-sm">$ whoami</p>
    <h1 class="mt-2.5 font-mono text-4xl font-bold sm:text-5xl">
      Binoy Patel<span
        class="bg-terminal-accent ml-1.5 inline-block h-9 w-3 align-middle sm:h-11"
        style="animation: blink 1s step-end infinite"
      ></span>
    </h1>
    <p class="text-terminal-muted mt-5 max-w-xl font-mono text-base leading-relaxed">
      Full Stack Engineer crafting scalable, user-centric software solutions with 10+ years of
      hands-on expertise.
    </p>
  </div>
</div>

<div class="container pb-16">
  <p class="text-terminal-accent mb-2 font-mono text-sm">
    <span class="typed-cmd">$ mcp call get_projects</span>
  </p>
  <p class="gen-line text-terminal-muted mb-5 h-4 font-mono text-xs">
    &gt; resolving {projects.length} project{projects.length === 1 ? '' : 's'}<span
      class="gen-dot"
      style="animation-delay:1.3s">.</span
    ><span class="gen-dot" style="animation-delay:1.5s">.</span><span
      class="gen-dot"
      style="animation-delay:1.7s">.</span
    >
  </p>

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each projects as project, i (project._id)}
      <a
        class="project-card border-terminal-border bg-terminal-panel flex flex-col overflow-hidden rounded-lg border text-inherit no-underline"
        style="animation-delay:{1600 + i * 100}ms"
        href={resolve(`/project/${stegaClean(project.slug.current)}`)}
      >
        <div class="bg-terminal-bg aspect-video w-full overflow-hidden">
          {#if project.featuredImage.asset?.url}
            <Image
              src={project.featuredImage.asset?.url}
              alt={project.featuredImage?.alt || project.featuredImage?.asset?.altText || ''}
              layout="fullWidth"
              objectFit="contain"
              background={project.featuredImage.asset.metadata?.lqip}
              class="h-full w-full"
              priority={i === 0}
            />
          {/if}
        </div>
        <div class="flex flex-1 flex-col justify-center p-4">
          <h3 class="font-mono text-sm font-semibold">{project.title}</h3>
          <p class="text-terminal-muted mt-1.5 text-xs leading-relaxed">
            {project.featuredDescription}
          </p>
        </div>
      </a>
    {/each}
  </div>
</div>
