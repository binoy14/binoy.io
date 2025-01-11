<script lang="ts">
  import CloseIcon from './CloseIcon.svelte';

  interface Props {
    name: string;
    label: string;
    input: HTMLInputElement | undefined;
    oninput: (e: Event) => void;
    onclick: () => void;
    value: number | undefined;
  }

  let { name, label, oninput, onclick, input = $bindable(), value = $bindable() }: Props = $props();
</script>

<div class="mt-4 inline-flex w-full">
  <label for={name} class="sr-only">{label}</label>
  <input
    placeholder={label}
    type="number"
    id={name}
    bind:this={input}
    bind:value
    {oninput}
    class="w-full appearance-none rounded-l px-2 py-4 shadow"
    min="0"
  />
  <button class="rounded-r bg-white px-2" {onclick}>
    <CloseIcon />
  </button>
</div>
