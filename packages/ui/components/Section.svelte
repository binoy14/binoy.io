<script lang="ts">
  import classnames from 'classnames';

  type SectionType = 'dark' | 'light';

  export let type: SectionType;
  export let className: string = '';
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
  <slot />
</div>
