<script lang="ts">
  export let header: string;
  export let subtext: string | null = null;
</script>

<div class="my-5">
  <h1 class="mb-1 text-3xl">{header}</h1>
  <span>{subtext}</span>
</div>
