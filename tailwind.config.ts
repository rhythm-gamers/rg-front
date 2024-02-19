import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        leftZoom: "leftZoom 4s ease-in-out infinite",
        rightZoom: "rightZoom 4s ease-in-out infinite",
      },
      keyframes: {
        leftZoom: {
          "0, 40%": { transform: "translate(0, 0)" },
          "30%": { transform: "translate(50%, 0)" },
        },
        rightZoom: {
          "0, 40%": { transform: "translate(0, 0)" },
          "30%": { transform: "translate(-50%, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
