import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: AiOutlineFundProjectionScreen,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'featuredDescription',
      title: 'Featured Description',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'imageInfo',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'description',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'projectImage' }] }]
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required().integer().positive()
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'featuredDescription',
      media: 'featuredImage'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;

      return {
        title,
        subtitle,
        media
      };
    }
  }
});
