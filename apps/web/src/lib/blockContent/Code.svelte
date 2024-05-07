<script lang="ts">
  import type { CustomBlockComponentProps } from '@portabletext/svelte';
  import { HighlightAuto } from 'svelte-highlight';
  import ashes from 'svelte-highlight/styles/ashes';

  export let portableText: CustomBlockComponentProps<{
    code: string;
    language: string;
  }>;

  $: ({ code } = portableText.value);
</script>

<svelte:head>
  {@html ashes}
</svelte:head>

<HighlightAuto {code}></HighlightAuto>
