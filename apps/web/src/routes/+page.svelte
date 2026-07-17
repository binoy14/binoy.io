<script lang="ts">
  import { Card, Section, TextBlock } from '@binoy/ui';
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

<Section type="light">
  <div class="container">
    <TextBlock
      header="Hey 👋, I'm Binoy"
      subtext="Full Stack Engineer crafting scalable, user-centric software solutions with 10+ years of hands-on expertise."
    />
  </div>
</Section>

<div class="container">
  <h2 class="mt-10 text-xl font-bold">Projects</h2>

  <Section type="dark" className="sm:grid-cols-projects mt-5 sm:grid sm:gap-10">
    {#each projects as project (project._id)}
      <Card>
        <a href={resolve(`/project/${stegaClean(project.slug.current)}`)}>
          <h3 class="text-lg font-bold">{project.title}</h3>
          <div
            class="sm:grid-cols-project-content flex h-full min-h-[390px] flex-col items-center sm:grid"
          >
            <div class="sm:mr-8">
              {#if project.featuredImage.asset?.url}
                <Image
                  src={project.featuredImage.asset?.url}
                  alt={project.featuredImage?.asset?.altText || ''}
                  layout="fullWidth"
                  background={project.featuredImage.asset.metadata?.lqip}
                  class="rounded-sm"
                />
              {/if}
            </div>
            <p class="my-8">{project.featuredDescription}</p>
          </div>
        </a>
      </Card>
    {/each}
  </Section>
</div>
