import React from "react";

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuredDescription",
      title: "Featured Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "featuredImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "projectImages",
      title: "Project Images",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projectImageDocument" }] }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      image: "featuredImage.asset.url",
    },
    prepare(selection) {
      const { title, subtitle, image } = selection;

      return {
        title,
        subtitle,
        media: <img src={image} alt="Featured" />,
      };
    },
  },
};
