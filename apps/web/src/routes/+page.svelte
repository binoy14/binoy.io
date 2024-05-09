<script lang="ts">
  import { Card, Section, TextBlock } from '@binoy/ui';
  import { Image } from '@unpic/svelte';

  export let data;
</script>

<Section type="light">
  <div class="container">
    <TextBlock
      header="Hey 👋, I'm Binoy"
      subtext="Full Stack Developer, React Groupie and GraphQL Enthusiast"
    />
  </div>
</Section>

<div class="container">
  <h2 class="mt-10 text-xl font-bold">Projects</h2>

  <Section type="dark" className="sm:grid-cols-projects mt-5 sm:grid sm:gap-10">
    {#each data.projects as project}
      <Card>
        <div
          class="flex h-full min-h-[390px] flex-col items-center sm:grid sm:grid-cols-projectContent"
        >
          <a href={`/project/${project.slug.current}`} class="sm:mr-8">
            {#if project.featuredImage.asset?.url}
              <Image
                src={project.featuredImage.asset?.url}
                alt={project.featuredImage?.asset?.altText || ''}
                layout="fullWidth"
                background={project.featuredImage.asset.metadata?.lqip}
              />
            {/if}
          </a>
          <a href={`/project/${project.slug.current}`} class="my-8">
            <h3 class="text-lg font-bold">{project.title}</h3>
            <p>{project.featuredDescription}</p>
          </a>
        </div>
      </Card>
    {/each}
  </Section>
</div>
