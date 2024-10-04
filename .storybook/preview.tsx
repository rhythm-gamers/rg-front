import React from "react";
import "../src/app/globals.css";
import { Preview } from "@storybook/react";
import StoreProvider from "../src/app/storeProvider";
import { RouteChangesProvider } from "nextjs-router-events";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^(on[A-Z].*|set[A-Z].*)" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <StoreProvider>
        <RouteChangesProvider>
          <Story />
        </RouteChangesProvider>
      </StoreProvider>
    ),
  ],
};

export default preview;
