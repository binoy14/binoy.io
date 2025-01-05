<script lang="ts">
  import classnames from 'classnames';

  type SectionType = 'dark' | 'light';

  interface Props {
    type: SectionType;
    className?: string;
    children?: import('svelte').Snippet;
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
