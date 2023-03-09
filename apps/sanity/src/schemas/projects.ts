import { BiCollection } from "react-icons/bi";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  icon: BiCollection,
  fields: [
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Projects",
      };
    },
  },
});