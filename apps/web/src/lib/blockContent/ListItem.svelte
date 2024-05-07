<script lang="ts">
  import type { ListItemComponentProps } from '@portabletext/svelte';

  export let portableText: ListItemComponentProps<{ type: 'bullet' | 'number' }>;
</script>

<li><slot /></li>
