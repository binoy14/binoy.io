import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdLink } from 'react-icons/md';
import { defineField } from 'sanity';

export default defineField({
  name: 'blogBody',
  title: 'Body',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: MdLink,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                to: [{ type: 'blog' }],
              },
            ],
          },
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            icon: FaExternalLinkAlt,
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      type: 'code',
      title: 'Code',
    },
  ],
  validation: (Rule) => Rule.required(),
});
