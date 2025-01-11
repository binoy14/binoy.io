<script lang="ts">
  interface Props {
    finalPrice?: number;
    title?: string;
  }

  let { finalPrice = 0, title = 'Final Price' }: Props = $props();
</script>

<div
  class="relative mt-4 grid h-40 min-h-[10rem] w-full overflow-hidden rounded bg-white p-2 shadow-md"
>
  <span class="absolute right-2 top-2 text-amber-700">{title}</span>
  <span
    class="flex w-full items-center gap-2 self-end justify-self-end overflow-x-auto overflow-y-hidden text-right text-5xl font-bold text-gray-500"
  >
    <span class="text-3xl font-normal">$</span>
    <span class="flex-1">
      {finalPrice
        .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })
        .replace('$', '')}
    </span>
  </span>
</div>
