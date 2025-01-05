<script lang="ts">
  import BlockContent from '$lib/blockContent/BlockContent.svelte';
  import { type InputValue } from '@portabletext/svelte';

  let { data } = $props();

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  let blogBody = $derived(data.blog.body as InputValue);
</script>

<div class="container mb-10 grid gap-5">
  <h1 class="text-2xl font-bold">{data.blog.title}</h1>
  <p class="text-xs italic">{formatDate(data.blog.publishedAt)}</p>

  {#if blogBody}
    <BlockContent value={blogBody} />
  {/if}
</div>
