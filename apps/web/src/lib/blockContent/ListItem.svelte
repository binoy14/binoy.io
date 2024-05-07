<script lang="ts">
  import type { ListItemComponentProps } from '@portabletext/svelte';

  // eslint-disable-next-line svelte/valid-compile
  export let portableText: ListItemComponentProps<{ type: 'bullet' | 'number' }>;
</script>

<li><slot /></li>
