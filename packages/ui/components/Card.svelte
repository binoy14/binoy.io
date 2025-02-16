<script lang="ts">
  import { type Snippet } from 'svelte';

  interface Props {
    className?: string;
    children?: Snippet;
  }

  let { className = '', children }: Props = $props();
</script>

<div class={`mb-8 rounded-lg bg-white p-5 text-black shadow-sm sm:mb-0 ${className}`}>
  {@render children?.()}
</div>
