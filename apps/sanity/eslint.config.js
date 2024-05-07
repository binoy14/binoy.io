import customConfig from '@binoy/eslint-config';

export default [
  {
    ignores: [
      '.DS_Store',
      '**/node_modules',
      '**/dist',
      '**/build',
      '**/.svelte-kit',
      '**/package',
      '**/.sanity',
      '.env',
      '.env.*',
      '!.env.example',

      // Ignore files for PNPM, NPM and YARN
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock'
    ]
  },
  ...customConfig
];
