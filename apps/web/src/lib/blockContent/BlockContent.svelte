<script lang="ts">
  import Image from './Image.svelte';
  import { PortableText, type InputValue } from '@portabletext/svelte';
  import Link from './Link.svelte';
  import ListItem from './ListItem.svelte';
  import Code from './Code.svelte';

  interface Props {
    value: InputValue;
  }

  let { value }: Props = $props();
</script>

<div
  class="prose prose-invert prose-headings:font-mono prose-headings:text-terminal-text prose-p:text-terminal-text prose-a:text-terminal-accent
    prose-a:no-underline hover:prose-a:text-[#8ff2ae]
    prose-strong:text-terminal-text prose-code:rounded prose-code:border
    prose-code:border-terminal-border prose-code:bg-terminal-panel
    prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono
    prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
    prose-pre:border prose-pre:border-terminal-border prose-pre:bg-terminal-panel
    prose-blockquote:border-terminal-accent prose-blockquote:text-terminal-muted prose-hr:border-terminal-border
    max-w-md! font-sans
    md:max-w-2xl! lg:max-w-none!"
>
  <PortableText
    {value}
    components={{
      listItem: {
        bullet: ListItem,
        number: ListItem,
        normal: ListItem,
      },
      types: {
        image: Image,
        code: Code,
      },
      marks: {
        internalLink: Link,
        link: Link,
      },
    }}
    onMissingComponent={(component) => {
      console.warn('Missing component', component);
      return null;
    }}
  />
</div>
