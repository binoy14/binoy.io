import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageInfo",
  title: "Image Info",
  type: "image",
  fields: [
    defineField({
      name: "alt",
      title: "alt",
      type: "string",
    }),
    defineField({
      name: "caption",
      title: "caption",
      type: "string",
    }),
  ],
});
