<script lang="ts">
  import { onMount } from 'svelte';
  import ButtonInput from '$lib/components/ButtonInput.svelte';
  import PriceDisplay from '$lib/components/PriceDisplay.svelte';
  import Input from '$lib/components/Input.svelte';
  import { percentFormatter } from '$lib';

  let price: number | undefined = $state(undefined);
  let discount: number | undefined = $state(undefined);
  let tax: number | undefined = $state(undefined);
  let finalPrice: number | undefined = $state(0);

  let priceInput: HTMLInputElement | undefined;

  const allowedDiscounts = [10, 15, 20, 25, 30];
  const allowedTaxes = [5, 7, 7.25, 10];

  function calculateDiscount() {
    let totalPrice = price;

    if (typeof totalPrice !== 'number') {
      finalPrice = 0;
      return;
    }

    if (discount !== undefined) {
      totalPrice = totalPrice - (totalPrice * discount) / 100;
    }

    if (tax !== undefined) {
      totalPrice = totalPrice + (totalPrice * tax) / 100;
    }

    finalPrice = totalPrice ?? 0;
  }

  function handleReset() {
    price = undefined;
    discount = undefined;
    tax = undefined;
    finalPrice = 0;

    priceInput?.focus();
  }

  function handleClear() {
    price = undefined;
    finalPrice = 0;
  }

  onMount(() => {
    priceInput?.focus();
  });
</script>

<h1 class="mb-4 text-xl font-bold text-white">Discount Calculator</h1>

<Input
  name="price"
  label="Price"
  oninput={calculateDiscount}
  bind:value={price}
  onclick={handleClear}
  input={priceInput}
/>

<ButtonInput
  items={allowedDiscounts}
  label="discount"
  title="Discount %"
  placeholder="%"
  bind:value={discount}
  formatter={percentFormatter}
  inputChange={(e) => {
    discount = e;
    calculateDiscount();
  }}
/>

<ButtonInput
  items={allowedTaxes}
  label="tax"
  title="Tax %"
  placeholder="%"
  bind:value={tax}
  formatter={percentFormatter}
  inputChange={(e) => {
    tax = e;
    calculateDiscount();
  }}
/>

<PriceDisplay {finalPrice} />

<button
  onclick={handleReset}
  class="mt-4 w-full rounded border border-red-400 bg-white px-4 py-2 font-bold text-red-600 shadow"
>
  Reset
</button>
