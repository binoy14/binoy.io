/* eslint-disable @typescript-eslint/no-require-imports */
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    '../../packages/ui/components/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
        },
      },
      gridTemplateColumns: {
        projects: 'repeat(auto-fit, minmax(450px, 1fr));',
        projectContent: '250px 1fr',
      },
      fontFamily: {
        sans: ['var(--font-fira-code)', defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
