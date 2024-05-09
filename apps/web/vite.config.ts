import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  clearScreen: false,
  plugins: [
    sveltekit(),
    Icons({
      compiler: 'svelte',
    }),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  build: {
    commonjsOptions: {
      include: [/@binoy-ui/, /node_modules/],
    },
  },
});
