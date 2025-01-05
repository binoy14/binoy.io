<script lang="ts">
  /* eslint-disable @typescript-eslint/no-explicit-any */
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

<div class="prose prose-invert !max-w-md md:!max-w-2xl lg:!max-w-none">
  <PortableText
    {value}
    components={{
      listItem: {
        bullet: ListItem as any,
        number: ListItem as any,
        normal: ListItem as any,
      },
      types: {
        image: Image as any,
        code: Code as any,
      },
      marks: {
        internalLink: Link as any,
        link: Link as any,
      },
    }}
    onMissingComponent={(component) => {
      console.warn('Missing component', component);
      return null;
    }}
  />
</div>
