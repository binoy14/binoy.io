<script lang="ts">
  import { Card } from '@binoy/ui';
  import FaGithub from 'virtual:icons/fa/github';
  import FaLinkedin from 'virtual:icons/fa/linkedin';
  import FaTwitter from 'virtual:icons/fa/twitter';
  import FaYoutube from 'virtual:icons/fa/youtube';
  import MdEmail from 'virtual:icons/mdi/email';

  export const contactIcons = {
    Twitter: FaTwitter,
    Youtube: FaYoutube,
    Email: MdEmail,
    Github: FaGithub,
    Linkedin: FaLinkedin,
  } as const;

  function getIcon(title: string) {
    return contactIcons[title as keyof typeof contactIcons];
  }

  export let data;
</script>

<div class="container">
  <Card>
    <h1 class="text-2xl font-bold">Say Hello!</h1>
    <div class="my-10 flex flex-wrap justify-center">
      {#each data.contacts as { link, title }}
        <a href={link} target="_blank" rel="noreferrer noopener" class="mb-8 ml-8 first:ml-0">
          <svelte:component this={getIcon(title)} class="h-11 w-11" />
        </a>
      {/each}
    </div>
  </Card>
</div>
