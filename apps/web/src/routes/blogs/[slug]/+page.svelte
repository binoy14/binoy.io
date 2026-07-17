<script lang="ts">
  import BlockContent from '$lib/blockContent/BlockContent.svelte';
  import { type InputValue } from '@portabletext/svelte';
  import { useQuery, stegaClean } from '@sanity/sveltekit';
  import type { GetBlogBySlugResult } from '$lib/groq/sanity.types';
  import Seo from '$lib/Seo.svelte';
  import { absoluteUrl, blogPostingJsonLd } from '$lib/seo';

  let { data } = $props();
  const query = $derived(useQuery<GetBlogBySlugResult>(data));
  const blog = $derived($query.data);

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  let blogBody = $derived(blog?.body as InputValue);

  const canonical = $derived(
    blog?.slug ? absoluteUrl(`/blogs/${stegaClean(blog.slug.current)}`) : undefined,
  );
</script>

{#if blog}
  <Seo
    title={stegaClean(blog.title)}
    description={blog.excerpt ? stegaClean(blog.excerpt) : undefined}
    {canonical}
    type="article"
    publishedAt={blog.publishedAt}
    jsonLd={blogPostingJsonLd({
      title: stegaClean(blog.title),
      description: blog.excerpt ? stegaClean(blog.excerpt) : undefined,
      url: canonical ?? '',
      publishedAt: blog.publishedAt,
    })}
  />
{/if}

<div class="container mb-10 grid gap-5">
  <h1 class="text-2xl font-bold">{blog?.title}</h1>
  <p class="text-xs italic">{blog?.publishedAt ? formatDate(blog.publishedAt) : ''}</p>

  {#if blogBody}
    <BlockContent value={blogBody} />
  {/if}
</div>
