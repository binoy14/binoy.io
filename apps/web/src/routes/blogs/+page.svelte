<script lang="ts">
  import { Card } from '@binoy/ui';
  import { resolve } from '$app/paths';
  import { useQuery, stegaClean } from '@sanity/sveltekit';
  import type { GetBlogsResult } from '$lib/groq/sanity.types';
  import Seo from '$lib/Seo.svelte';

  function getFormattedDate(publishedAt: string) {
    return new Date(publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  // typegen doesn't support functions typing
  function getFormattedReadingTime(readingTime: unknown) {
    return `${readingTime} min read`;
  }

  let { data } = $props();
  const query = $derived(useQuery<GetBlogsResult>(data));
  const blogs = $derived($query.data ?? []);
</script>

<Seo
  title="Blog"
  description="Articles on full stack engineering, software architecture, and building for the web."
/>

<div class="container">
  <h1 class="mt-10 mb-5 text-2xl font-bold">Blog</h1>
  {#each blogs as blog (blog.slug)}
    <Card className="my-10 py-10 px-10 first:mt-0">
      <a href={resolve(`/blogs/${stegaClean(blog.slug.current)}`)}>
        <h2 class="text-xl font-bold">{blog.title}</h2>
      </a>
      <h4 class="mt-2">
        {getFormattedDate(blog.publishedAt)} - {getFormattedReadingTime(blog.readingTime)}
      </h4>
      <p class="mt-4 text-lg">{blog.excerpt}</p>
    </Card>
  {/each}
</div>
