import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import type { DocumentActionComponent, DocumentActionsContext, Template } from 'sanity';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './src/schemas';

// Documents that should exist exactly once and never be created/deleted/duplicated.
const SINGLETON_TYPES = new Set(['homepage']);
const SINGLETON_ACTIONS = new Set(['publish', 'discardChanges', 'restore']);

const sharedSettings = {
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => !SINGLETON_TYPES.has(item.getId() ?? '')),
          ]),
    }),
    codeInput(),
    visionTool({
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    }),
  ],
  schema: {
    types: schemaTypes,
    // Hide singletons from the global "create new document" menu.
    templates: (prev: Template[]) =>
      prev.filter((template) => !SINGLETON_TYPES.has(template.schemaType)),
  },
  document: {
    // Strip delete/duplicate/unpublish actions from singletons.
    actions: (input: DocumentActionComponent[], context: DocumentActionsContext) =>
      SINGLETON_TYPES.has(context.schemaType)
        ? input.filter(({ action }) => action && SINGLETON_ACTIONS.has(action))
        : input,
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
