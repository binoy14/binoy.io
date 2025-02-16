<script lang="ts">
  import classnames from 'classnames';
  import type { Snippet } from 'svelte';

  type SectionType = 'dark' | 'light';

  interface Props {
    type: SectionType;
    className?: string;
    children?: Snippet;
  }

  let { type, className = '', children }: Props = $props();
</script>

<div
  class={classnames(
    'py-6',
    {
      'bg-black text-white': type === 'dark',
      'bg-white text-black': type === 'light'
    },
    className
  )}
>
  {@render children?.()}
</div>
