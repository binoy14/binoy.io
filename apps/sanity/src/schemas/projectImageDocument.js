import React from "react";

export default {
  name: "projectImageDocument",
  title: "Project Image Document",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "projectImage",
    },
  ],
  preview: {
    select: {
      title: "image.caption",
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
