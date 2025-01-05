<script lang="ts">
  interface Props {
    className?: string;
    children?: import('svelte').Snippet;
  }

  let { className = '', children }: Props = $props();
</script>

<div class={`mb-8 rounded-lg bg-white p-5 text-black shadow sm:mb-0 ${className}`}>
  {@render children?.()}
</div>
