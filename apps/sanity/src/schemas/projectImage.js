import React from "react";

export default {
  name: "projectImage",
  title: "Project Image",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
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
      title: "name",
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
