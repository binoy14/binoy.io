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
      'bg-terminal-bg text-terminal-text': type === 'dark',
      'bg-terminal-panel text-terminal-text': type === 'light',
    },
    className,
  )}
>
  {@render children?.()}
</div>
