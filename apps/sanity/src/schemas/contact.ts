import { contactIcons } from '../utils/contactIcons';
import { MdPhone } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  icon: MdPhone,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: Object.keys(contactIcons)
      }
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https', 'mailto']
        }).required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link'
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle
      };
    }
  }
});
