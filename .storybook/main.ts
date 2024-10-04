import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    {
      directory: "../src/components/atoms",
      files: "**/*.stories.*",
      titlePrefix: "atoms",
    },
    {
      directory: "../src/components/molecules",
      files: "**/*.stories.*",
      titlePrefix: "molecules",
    },
    {
      directory: "../src/components/organisms",
      files: "**/*.stories.*",
      titlePrefix: "organisms",
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_AWS_CLOUDFRONT_URL: process.env.STORYBOOK_AWS_CLOUDFRONT_URL!,
  }),
  docs: {
    autodocs: "tag",
  },
};
export default config;
