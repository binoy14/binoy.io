<script lang="ts">
  import { Card } from '@binoy/ui';

  function getFormattedDate(publishedAt: string) {
    return new Date(publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  function getFormattedReadingTime(readingTime: number) {
    return `${readingTime} min read`;
  }

  export let data;
</script>

<svelte:head>
  <title>Blogs - Binoy Patel</title>
</svelte:head>

<div class="container">
  {#each data.blogs as blog}
    <Card className="my-10 py-10 px-10 first:mt-0">
      <a href={`/blogs/${blog.slug.current}`}>
        <h1 class="text-xl font-bold">{blog.title}</h1>
      </a>
      <h4 class="mt-2">
        {getFormattedDate(blog.publishedAt)} - {getFormattedReadingTime(blog.readingTime)}
      </h4>
      <p class="mt-4 text-lg">{blog.excerpt}</p>
    </Card>
  {/each}
</div>
