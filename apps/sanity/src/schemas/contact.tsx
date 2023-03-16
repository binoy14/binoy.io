import { MdPhone } from "react-icons/md";
import { defineField, defineType } from "sanity";

// import { AutoComplete } from "../components/AutoComplete";

// const allIconStrings = [...Object.keys(AllMdIcons), ...Object.keys(AllFaIcons)];

export default defineType({
  name: "contact",
  title: "Contact",
  icon: MdPhone,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["https", "mailto"],
        }).required(),
    }),
    // defineField({
    //   name: "icon",
    //   title: "React Icons Icon",
    //   type: "string",
    //   components: {
    //     input: AutoComplete,
    //   },
    //   validation: (Rule) => Rule.required(),
    //   options: {
    //     list: allIconStrings,
    //   },
    // }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "link",
      // icon: "icon",
    },
    prepare({ title, subtitle }) {
      // const Icon = (AllMdIcons as any)[icon] ?? (AllFaIcons as any)[icon];
      return {
        title,
        subtitle,
        // media: <Icon size={30} />,
      };
    },
  },
});
