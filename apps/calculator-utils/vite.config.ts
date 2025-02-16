import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    tailwindcss(),
    Icons({
      compiler: 'svelte',
    }),
  ],
  test: {
    globals: true,
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
