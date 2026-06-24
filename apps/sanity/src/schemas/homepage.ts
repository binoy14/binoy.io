import { AiOutlineHome } from 'react-icons/ai';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: AiOutlineHome,
  fields: [
    defineField({
      name: 'projects',
      title: 'Projects',
      description:
        'Projects shown on the homepage, in display order. Drag to reorder. A project not listed here is hidden everywhere (its detail page 404s).',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'project' }] })],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Homepage' };
    },
  },
});
