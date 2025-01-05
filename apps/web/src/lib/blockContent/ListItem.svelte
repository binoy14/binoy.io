<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
  export const portableText = null;
</script>

<li>{@render children?.()}</li>
