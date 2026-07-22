<script lang="ts">
  import { useQuery, stegaClean } from '@sanity/sveltekit';
  import type { GetContactsResult } from '$lib/groq/sanity.types';
  import Seo from '$lib/Seo.svelte';

  function getDisplayValue(link: string) {
    return stegaClean(link)
      .replace(/^mailto:/, '')
      .replace(/^https?:\/\//, '');
  }

  let { data } = $props();
  const query = $derived(useQuery<GetContactsResult>(data));
  const contacts = $derived($query.data ?? []);
</script>

<Seo
  title="Contact"
  description="Get in touch with Binoy Patel — find me on GitHub, LinkedIn, X, YouTube, or by email."
/>

<div class="container max-w-2xl pt-16 pb-10">
  <p class="text-terminal-accent font-mono text-sm">$ cat contact.json</p>
  <h1 class="mt-3.5 font-mono text-4xl font-bold">Say hello 👋</h1>
</div>

<div class="container max-w-2xl pb-16">
  <div class="border-terminal-border bg-terminal-panel rounded-lg border py-2 font-mono text-sm">
    <p class="text-terminal-muted px-7 py-1.5">{'{'}</p>
    {#each contacts as { link, title } (link)}
      <a
        href={stegaClean(link)}
        target="_blank"
        rel="external noreferrer noopener"
        class="group hover:bg-terminal-accent/5 flex flex-wrap gap-x-2 gap-y-1 py-2.5 pr-7 pl-11 no-underline transition-colors"
      >
        <span class="text-terminal-text shrink-0">"{stegaClean(title).toLowerCase()}"</span>
        <span class="text-terminal-muted shrink-0">:</span>
        <span class="text-terminal-accent break-all transition-colors group-hover:text-[#8ff2ae]">
          "{getDisplayValue(link)}"
        </span>
      </a>
    {/each}
    <p class="text-terminal-muted px-7 py-1.5">&#125;</p>
  </div>
</div>
