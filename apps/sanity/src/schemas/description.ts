import { defineField } from 'sanity';

export default defineField({
  name: 'description',
  title: 'Description',
  type: 'array',
  of: [
    {
      type: 'block'
    }
  ]
});
