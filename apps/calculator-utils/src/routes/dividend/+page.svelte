<script lang="ts">
  import { onMount } from 'svelte';
  import ButtonInput from '$lib/components/ButtonInput.svelte';
  import PriceDisplay from '$lib/components/PriceDisplay.svelte';
  import Input from '$lib/components/Input.svelte';
  import { calculateInvestmentReturn, calendarFormatter } from '$lib/utils';

  let investmentAmountEl: HTMLInputElement | undefined;

  let investmentAmount: number | undefined = $state(undefined);
  let apy: number | undefined = $state(undefined);
  let years: number | undefined = $state(undefined);
  let dividendReturn: number = $state(0);
  let totalReturn: number = $state(0);

  const allowedYears = [0.25, 0.5, 1, 2];

  function handleInvestmentClear() {
    investmentAmount = undefined;
    dividendReturn = 0;
    totalReturn = 0;
  }

  function handleApyClear() {
    apy = undefined;
    dividendReturn = 0;
    totalReturn = 0;
  }

  function calculateDividend() {
    if (
      typeof apy !== 'number' ||
      typeof years !== 'number' ||
      typeof investmentAmount !== 'number'
    ) {
      return;
    }

    const { returnAmount, dividendAmount } = calculateInvestmentReturn({
      principal: investmentAmount,
      annualYieldPercent: apy,
      years,
    });

    dividendReturn = dividendAmount ?? 0;
    totalReturn = returnAmount ?? 0;
  }

  function handleReset() {
    investmentAmount = undefined;
    years = undefined;
    apy = undefined;
    dividendReturn = 0;
    totalReturn = 0;

    investmentAmountEl?.focus();
  }

  onMount(() => {
    investmentAmountEl?.focus();
  });
</script>

<h1 class="mb-4 text-xl font-bold text-white">Dividend Calculator</h1>

<Input
  oninput={calculateDividend}
  name="investmentAmount"
  input={investmentAmountEl}
  bind:value={investmentAmount}
  onclick={handleInvestmentClear}
  label="Investment Amount:"
/>

<Input
  oninput={calculateDividend}
  name="apy"
  bind:value={apy}
  input={undefined}
  onclick={handleApyClear}
  label="Annual Yield (%)"
/>

<ButtonInput
  items={allowedYears}
  label="length"
  title="Length"
  bind:value={years}
  placeholder="Years"
  formatter={calendarFormatter}
  inputChange={(e) => {
    years = e;
    calculateDividend();
  }}
/>

<PriceDisplay finalPrice={dividendReturn} title="Total Dividend Return" />

<PriceDisplay finalPrice={totalReturn} title="Total Return" />

<button
  onclick={handleReset}
  class="mt-4 w-full rounded border border-red-400 bg-white px-4 py-2 font-bold text-red-600 shadow"
  >Reset</button
>
