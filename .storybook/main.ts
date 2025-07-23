import type { StorybookConfig } from "@storybook/nextjs-vite";
import { join } from "path";

const config: StorybookConfig = {
  stories: [
    "../**/*.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],

  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...(config.resolve ?? {}),
        alias: {
          ...(config.resolve?.alias ?? {}),
          "@": join(process.cwd(), "."),
        },
      },
    };
  },
};

export default config;
