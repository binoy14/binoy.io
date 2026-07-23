<script lang="ts">
  import BlockContent from '$lib/blockContent/BlockContent.svelte';
  import { type InputValue } from '@portabletext/svelte';
  import { resolve } from '$app/paths';
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

{#if blog}
  <div class="container max-w-3xl pt-14 pb-20">
    <a
      href={resolve('/blogs')}
      class="text-terminal-muted font-mono text-[13px] transition-colors hover:text-[#8ff2ae]"
    >
      &larr; cat ~/blogs
    </a>

    <p class="text-terminal-accent mt-6 font-mono text-sm">
      $ cat {stegaClean(blog.slug.current)}.md
    </p>
    <h1 class="mt-3.5 font-mono text-3xl font-bold sm:text-4xl">{blog.title}</h1>
    <p class="text-terminal-muted mt-3 font-mono text-[13px]">
      {formatDate(blog.publishedAt)} · {blog.readingTime} min read
    </p>

    {#if blogBody}
      <div class="mt-9">
        <BlockContent value={blogBody} />
      </div>
    {/if}
  </div>
{/if}
