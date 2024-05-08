<script lang="ts">
  import Image from './Image.svelte';
  import { PortableText, type InputValue } from '@portabletext/svelte';
  import Link from './Link.svelte';
  import ListItem from './ListItem.svelte';
  import Code from './Code.svelte';

  export let value: InputValue;
</script>

<div class="prose prose-invert !max-w-md md:!max-w-2xl lg:!max-w-none">
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
