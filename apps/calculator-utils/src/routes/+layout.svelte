<script lang="ts">
  import '../app.css';
  import '@fontsource/roboto';
  import { inject } from '@vercel/analytics';
  import HandMoney from 'virtual:icons/solar/hand-money-linear';
  import Discount from 'virtual:icons/ic/outline-discount';
  import MoneyInsert from 'virtual:icons/uil/money-insert';
  import { page } from '$app/stores';
  import { dev } from '$app/environment';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  inject({ mode: dev ? 'development' : 'production' });

  const pages = [
    {
      label: 'Tips',
      path: '/',
      icon: HandMoney,
    },
    {
      label: 'Discount',
      path: '/discount',
      icon: Discount,
    },
    {
      label: 'Dividend',
      path: '/dividend',
      icon: MoneyInsert,
    },
  ];

  let path = $derived($page.url.pathname);
</script>

<main class="min-h-screen min-w-full">
  <div class="container m-auto flex h-screen flex-col items-center p-4 md:w-96">
    {@render children?.()}
  </div>
</main>
<div class="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-white">
  <div class="mx-auto grid h-full max-w-lg grid-cols-3 font-medium">
    {#each pages as page}
      <a
        href={page.path}
        class="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 {page.path ===
        path
          ? 'text-blue-600'
          : 'text-gray-500'}"
      >
        <page.icon />
        <span
          class="text-sm {page.path === path
            ? 'text-blue-600'
            : 'text-gray-500'} group-hover:text-blue-600"
        >
          {page.label}
        </span>
      </a>
    {/each}
  </div>
</div>
