<script lang="ts">
  import { Card } from '@binoy/ui';
  import FaGithub from 'virtual:icons/fa/github';
  import FaLinkedin from 'virtual:icons/fa/linkedin';
  import FaTwitter from 'virtual:icons/fa/twitter';
  import FaYoutube from 'virtual:icons/fa/youtube';
  import MdEmail from 'virtual:icons/mdi/email';
  import { useQuery, stegaClean } from '@sanity/sveltekit';
  import type { GetContactsResult } from '$lib/groq/sanity.types';
  import Seo from '$lib/Seo.svelte';

  const contactIcons = {
    Twitter: FaTwitter,
    Youtube: FaYoutube,
    Email: MdEmail,
    Github: FaGithub,
    Linkedin: FaLinkedin,
  } as const;

  function getIcon(title: string) {
    // Strip stega markers before using the value as an object key.
    return contactIcons[stegaClean(title) as keyof typeof contactIcons];
  }

  let { data } = $props();
  const query = $derived(useQuery<GetContactsResult>(data));
  const contacts = $derived($query.data ?? []);
</script>

<Seo
  title="Contact"
  description="Get in touch with Binoy Patel — find me on GitHub, LinkedIn, X, YouTube, or by email."
/>

<div class="container">
  <Card>
    <h1 class="text-2xl font-bold">Say Hello!</h1>
    <div class="my-10 flex flex-wrap justify-center">
      {#each contacts as { link, title } (link)}
        {@const SvelteComponent = getIcon(title)}
        <a
          href={stegaClean(link)}
          target="_blank"
          rel="external noreferrer noopener"
          class="mb-8 ml-8 first:ml-0"
        >
          <SvelteComponent class="h-11 w-11" />
        </a>
      {/each}
    </div>
  </Card>
</div>
