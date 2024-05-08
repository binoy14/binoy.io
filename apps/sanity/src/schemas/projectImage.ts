import { MdImage } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projectImage',
  title: 'Project Image',
  icon: MdImage,
  type: 'document',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
    prepare(selection) {
      const { title, media } = selection;

      return {
        title,
        media,
      };
    },
  },
});
