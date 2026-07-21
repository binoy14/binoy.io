import { at, defineMigration, patch, set } from 'sanity/migrate';

interface ProjectImageRef {
  _key: string;
  _type: string;
  _ref?: string;
}

interface ProjectImageDoc {
  _id: string;
  alt?: string;
  caption?: string;
  image?: unknown;
}

/**
 * projectImage moved from a referenced document type to an inline object type
 * (see apps/sanity/src/schemas/projectImage.ts). This rewrites each project's
 * projectImages array from {_type: 'reference', _ref} entries to inlined
 * {_type: 'projectImage', alt, caption, image} objects.
 *
 * Note: context.client.getDocument() (and .clone().getDocument()) crash here
 * with "Cannot read private member #httpRequest" — @sanity/migrate wraps the
 * client in a Proxy that breaks methods relying on private class fields.
 * context.client.fetch() is unaffected, so a GROQ join is used instead.
 *
 * Run `delete-orphaned-project-images` afterwards to remove the now-unused
 * projectImage documents.
 */
export default defineMigration({
  title: 'Inline projectImage references into project.projectImages',
  documentTypes: ['project'],
  filter: 'count(projectImages[_type == "reference"]) > 0',
  migrate: {
    async document(doc, context) {
      const images = doc.projectImages as ProjectImageRef[];

      const refIds = images.filter((item) => item._ref).map((item) => item._ref);

      const referenced = await context.client.fetch<ProjectImageDoc[]>(
        '*[_id in $ids]{_id, alt, caption, image}',
        { ids: refIds },
      );
      const byId = new Map(referenced.map((ref) => [ref._id, ref]));

      const next = images
        .map((item) => {
          if (item._type !== 'reference' || !item._ref) return item;
          const ref = byId.get(item._ref);
          if (!ref) return null;
          return {
            _key: item._key,
            _type: 'projectImage',
            alt: ref.alt,
            caption: ref.caption,
            image: ref.image,
          };
        })
        .filter((item) => item !== null);

      return patch(doc._id, at('projectImages', set(next)));
    },
  },
});
