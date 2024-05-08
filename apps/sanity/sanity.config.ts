import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './src/schemas';

const sharedSettings = {
  plugins: [
    structureTool(),
    codeInput(),
    visionTool({
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    }),
  ],
  schema: {
    types: schemaTypes,
  },
};

export default defineConfig([
  {
    name: 'website',
    title: 'Binoy.io',
    projectId: '4t7pp8z5',
    dataset: 'production',
    basePath: '/production',
    ...sharedSettings,
  },
  {
    name: 'development',
    title: 'Binoy.io (Development)',
    projectId: '4t7pp8z5',
    dataset: 'development',
    basePath: '/development',
    ...sharedSettings,
  },
]);
