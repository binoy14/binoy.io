<script lang="ts">
  interface Props {
    header: string;
    subtext?: string | null;
  }

  let { header, subtext = null }: Props = $props();
</script>

<div class="my-5">
  <h1 class="mb-1 text-3xl">{header}</h1>
  <span>{subtext}</span>
</div>
