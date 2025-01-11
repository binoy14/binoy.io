<script lang="ts">
  import { onMount } from 'svelte';
  import ButtonInput from '$lib/components/ButtonInput.svelte';
  import PriceDisplay from '$lib/components/PriceDisplay.svelte';
  import Input from '$lib/components/Input.svelte';
  import { percentFormatter } from '$lib/utils';

  let priceInput: HTMLInputElement | undefined;

  let price: number | undefined = $state(undefined);
  let tip: number | undefined = $state(undefined);
  let tipAmount: number | undefined = $state(0);
  let finalPrice: number | undefined = $state(0);

  let allowedTips = [15, 20, 25, 30];

  function handleClear() {
    price = undefined;
    finalPrice = 0;
  }

  function calculateTip() {
    let totalPrice = price;

    if (typeof totalPrice !== 'number') {
      finalPrice = 0;
      return;
    }

    if (tip !== undefined) {
      tipAmount = (totalPrice * tip) / 100;
      totalPrice = totalPrice + tipAmount;
    }

    finalPrice = totalPrice ?? 0;
  }

  function handleReset() {
    price = undefined;
    tip = undefined;
    tipAmount = 0;
    finalPrice = 0;

    priceInput?.focus();
  }

  onMount(() => {
    priceInput?.focus();
  });
</script>

<h1 class="mb-4 text-xl font-bold text-white">Tip Calculator</h1>

<Input
  name="price"
  label="Price"
  oninput={calculateTip}
  bind:value={price}
  onclick={handleClear}
  input={priceInput}
/>

<ButtonInput
  items={allowedTips}
  label="tip"
  title="Tip %"
  placeholder="%"
  bind:value={tip}
  formatter={percentFormatter}
  inputChange={(e) => {
    tip = e;
    calculateTip();
  }}
/>

<PriceDisplay finalPrice={tipAmount} title="Tip Amount" />

<PriceDisplay {finalPrice} />

<button
  onclick={handleReset}
  class="mt-4 w-full rounded border border-red-400 bg-white px-4 py-2 font-bold text-red-600 shadow"
>
  Reset
</button>
