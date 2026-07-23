<script lang="ts">
  import { resolve } from '$app/paths';
  import { useQuery, stegaClean } from '@sanity/sveltekit';
  import type { GetBlogsResult } from '$lib/groq/sanity.types';
  import Seo from '$lib/Seo.svelte';

  const description =
    'Articles on full stack engineering, software architecture, and building for the web.';

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

<Seo title="Blog" {description} />

<div class="container max-w-4xl pt-16 pb-8">
  <p class="text-terminal-accent font-mono text-sm">$ ls ./blogs</p>
  <h1 class="mt-3.5 font-mono text-4xl font-bold">Blogs</h1>
</div>

<div class="container max-w-4xl pb-16">
  {#each blogs as blog, i (blog.slug.current)}
    <a
      class="group border-terminal-border hover:bg-terminal-accent/5 -mx-4 block rounded-md border-t px-4 py-5.5 no-underline transition-colors"
      class:border-b={i === blogs.length - 1}
      href={resolve(`/blogs/${stegaClean(blog.slug.current)}`)}
    >
      <h2
        class="text-terminal-text group-hover:text-terminal-accent font-mono text-base font-semibold transition-colors"
      >
        {stegaClean(blog.slug.current)}.md
      </h2>
      <p class="text-terminal-muted mt-1.5 font-mono text-xs">
        {getFormattedDate(blog.publishedAt)} · {getFormattedReadingTime(blog.readingTime)}
      </p>
      <p class="text-terminal-muted mt-2 max-w-2xl text-sm leading-relaxed">
        {blog.excerpt}
      </p>
    </a>
  {/each}
</div>
