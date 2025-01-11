<script lang="ts">
  import CloseIcon from './CloseIcon.svelte';

  interface Props {
    items: number[];
    label: string;
    value: number | undefined;
    title: string;
    placeholder?: string;
    formatter: (value: number) => string;
    inputChange: (value: number | undefined) => void;
  }

  let {
    items,
    label,
    value = $bindable(),
    title,
    placeholder = '',
    formatter,
    inputChange,
  }: Props = $props();

  let handleCalculation = (val?: number) => {
    inputChange(val);
  };

  $effect(() => {
    handleCalculation(value);
  });

  function handleClear() {
    handleCalculation(undefined);
  }
</script>

<div class="mt-4 w-full shadow">
  <div class="w-full rounded-t border bg-white pl-2 text-amber-700">{title}:</div>
  <div class="inline-flex w-full">
    {#each items as item, i}
      <button
        class="border-r bg-white px-2 py-4 font-bold"
        class:first-item={i === 0}
        class:active={value === item}
        data-testid={`${label}-${item}`}
        onclick={() => handleCalculation(item)}>{formatter(item)}</button
      >
    {/each}
    <div class="inline-flex">
      <label for={label} class="sr-only">{title}</label>
      <input
        type="number"
        id={label}
        bind:value
        {placeholder}
        class="w-full appearance-none px-2 py-4"
        min="0"
      />
      <button class="rounded-br bg-white px-2" onclick={handleClear}>
        <CloseIcon />
      </button>
    </div>
  </div>
</div>

<style lang="postcss">
  .first-item {
    @apply rounded-bl;
  }

  .active {
    @apply bg-gray-200;
  }
</style>
