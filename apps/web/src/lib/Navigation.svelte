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

  let linkClasses = classnames('font-mono', 'text-xs', 'transition-colors');

  function linkColorClasses(link: string) {
    const isActive = $page.url.pathname === `/${link}`;
    return classnames(linkClasses, {
      'text-terminal-accent': isActive,
      'text-terminal-muted hover:text-terminal-text': !isActive,
    });
  }
</script>

<nav class="border-terminal-border bg-terminal-bg sticky top-0 z-10 border-b transition-all">
  <div class="container flex h-14 w-full items-center justify-between">
    <a class="flex flex-1 items-center gap-2.5" href={resolve('/')} aria-label={title}>
      <span class="inline-block h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
      <span class="inline-block h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
      <span class="inline-block h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
      <span class="text-terminal-muted ml-2 font-mono text-xs">bash — {title}</span>
    </a>
    <!-- Desktop Nav -->
    <ul class="hidden gap-6 sm:flex">
      {#each links as navLink (navLink.link)}
        <li class={linkColorClasses(navLink.link)}>
          <a href={resolve(`/${navLink.link}` as '/')}>./{navLink.text.toLowerCase()}</a>
        </li>
      {/each}
    </ul>
    <!-- Mobile Nav -->
    <div class="sm:hidden">
      <button
        type="button"
        class="text-terminal-muted hover:text-terminal-accent inline-flex items-center justify-center rounded-md p-2"
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

  <ul
    class={classnames(
      'container',
      'flex',
      'flex-col',
      'items-start',
      'gap-4',
      'overflow-hidden',
      'sm:hidden',
      'transition-all',
      {
        'max-h-52 pb-4': navOpen === true,
        'max-h-0': navOpen === false,
      },
    )}
  >
    {#each links as navLink (navLink.link)}
      <li class={linkColorClasses(navLink.link)}>
        <a href={resolve(`/${navLink.link}` as '/')}>./{navLink.text.toLowerCase()}</a>
      </li>
    {/each}
  </ul>
</nav>
