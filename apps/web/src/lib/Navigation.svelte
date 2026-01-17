<script lang="ts">
  import classnames from 'classnames';
  import { page } from '$app/stores';
  import { type NavLinks } from './navigationTypes';
  import MdClose from '~icons/mdi/close';
  import MdMenu from '~icons/mdi/menu';
  import { resolve } from '$app/paths';

  interface Props {
    links?: NavLinks[];
    title: string | undefined;
  }

  let { links = [], title }: Props = $props();

  let navOpen: boolean = $state(false);

  function onNavClick() {
    navOpen = !navOpen;
  }

  let linkClasses = classnames('hover:underline', 'hover:text-yellow-400');
</script>

<nav class="container">
  <div class="flex h-24 w-full items-center bg-black text-white transition-all sm:h-36">
    <a class="flex-1" href={resolve("/")}>
      <h2 class="text-4xl">{title}</h2>
    </a>
    <!-- Desktop Nav -->
    <ul class="hidden sm:flex">
      {#each links as navLink (navLink.link)}
        <li
          class={classnames(linkClasses, 'mr-6', 'last:mr-0', {
            'text-yellow-400': $page.url.pathname === `/${navLink.link}`,
          })}
        >
          <a href={resolve(`/${navLink.link}` as "/")}>{navLink.text}</a>
        </li>
      {/each}
    </ul>
    <!-- Mobile Nav -->
    <div class="sm:hidden">
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-400"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onclick={onNavClick}
      >
        <span class="sr-only">Open Main Menu</span>
        {#if navOpen}
          <MdClose class="h-[24px] w-[24px]" />
        {:else}
          <MdMenu class="h-[24px] w-[24px]" />
        {/if}
      </button>
    </div>
  </div>
</nav>

<ul
  class={classnames(
    'flex',
    'flex-col',
    'items-center',
    'sm:hidden',
    'bg-black',
    'text-white',
    'transition-all',
    {
      'max-h-52': navOpen === true,
      'pb-4': navOpen === true,
      'max-h-0': navOpen === false,
    },
  )}
>
  {#if navOpen}
    {#each links as navLink (navLink.link)}
      <li
        class={classnames(linkClasses, 'mb-6', {
          'text-yellow-400': $page.url.pathname === `/${navLink.link}`,
        })}
      >
        <a class={`mb-6 ${linkClasses}`} href={resolve(`/${navLink.link}` as "/")}>{navLink.text}</a>
      </li>
    {/each}
  {/if}
</ul>
