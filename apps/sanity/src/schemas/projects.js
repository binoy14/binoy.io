import React from "react";
import { BiCollection } from "react-icons/bi";

export default {
  name: "projects",
  title: "Projects",
  type: "document",
  icon: BiCollection,
  fields: [
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    },
  ],
};
