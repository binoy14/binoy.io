<script lang="ts">
  import Image from '$lib/Image.svelte';
  import { Card, Section, TextBlock } from '@binoy/ui';

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
          class="sm:grid-cols-projectContent flex h-full min-h-[390px] flex-col items-center sm:grid"
        >
          <a href={`/project/${project.slug.current}`} class="sm:mr-8">
            <Image
              src={project.featuredImage}
              alt={project.featuredImage.alt || ''}
              width={400}
              height={350}
            />
          </a>
          <a href={`/project/${project.slug.current}`} class="my-8">
            <h3 class="text-lg font-bold">{project.title}</h3>
            <p>{project.featuredDescription}</p>
          </a>
        </div>
      </Card>
    {/each}
    <!-- {projects?.map((project) => {
      return (
        <Card key={project?._id}>
          <div className="sm:grid-cols-projectContent flex h-full min-h-[390px] flex-col items-center sm:grid">
            <Link className="sm:mr-8" to={`/project/${project?.slug?.current}`}>
              <Image
                src={project?.featuredImage}
                alt={project?.featuredImage?.alt || ""}
                width={400}
                height={350}
              />
            </Link>
            <Link className="my-8" to={`/project/${project?.slug?.current}`}>
              <h3 className="text-lg font-bold">{project?.title}</h3>
              <p>{project?.featuredDescription}</p>
            </Link>
          </div>
        </Card>
      );
    })} -->
  </Section>
</div>
