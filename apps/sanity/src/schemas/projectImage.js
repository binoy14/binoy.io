import React from "react";
import { MdImage } from "react-icons/md";

export default {
  name: "projectImage",
  title: "Project Image",
  icon: MdImage,
  type: "document",
  fields: [
    {
      name: "alt",
      title: "Alt",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "caption",
      media: "image.asset.url",
    },
    prepare(selection) {
      const { title, media } = selection;

      return {
        title,
        media: <img src={media} alt="Featured" />,
      };
    },
  },
};
