<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="container flex w-full justify-center">
  <h1 class="text-lg text-yellow-400">
    {$page.error?.message ?? 'Oops! Something went wrong!'}
  </h1>
</div>
