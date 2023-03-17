import { defineCliConfig } from "@sanity/cli";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineCliConfig({
  api: {
    projectId: "4t7pp8z5",
    dataset: "development",
  },
  vite(config) {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        tsconfigPaths({
          root: "./apps/sanity",
        }),
      ],
    };
  },
});
