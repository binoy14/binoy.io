import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'imageInfo',
  title: 'Image Info',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'alt',
      type: 'string',
      description: 'Describe the image for screen readers and search engines.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'caption',
      type: 'string',
    }),
  ],
});
