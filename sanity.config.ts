import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { schemaTypes } from "./apps/sanity/src/schemas";

export default defineConfig({
  name: "website",
  title: "Binoy.io",
  projectId: "4t7pp8z5",
  dataset: "development",
  plugins: [
    deskTool(),
    visionTool({
      defaultApiVersion: "v2021-10-21",
      defaultDataset: "development",
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
