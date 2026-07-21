import { defineMigration, del } from 'sanity/migrate';

/**
 * Removes projectImage documents left behind by `inline-project-images`.
 * Run this only after that migration has been applied and verified —
 * it unconditionally deletes every remaining projectImage document.
 */
export default defineMigration({
  title: 'Delete orphaned projectImage documents',
  documentTypes: ['projectImage'],
  migrate: {
    document(doc) {
      return del(doc._id);
    },
  },
});
