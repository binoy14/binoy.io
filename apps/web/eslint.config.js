import customConfig from '@binoy/eslint-config';

export default [
  {
    ignores: [
      '**/dist',
      '.DS_Store',
      '**/node_modules',
      '**/build',
      '**/.svelte-kit',
      '**/.vercel',
      '**/package',
      '.env',
      '.env.*',
      '!.env.example',

      // Ignore files for PNPM, NPM and YARN
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
    ],
  },
  ...customConfig,
];
