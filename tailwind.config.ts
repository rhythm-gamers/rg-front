import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "chingho-rank-1": colors.gray[200],
        "chingho-rank-2": colors.lime[300],
        "chingho-rank-3": colors.indigo[400],
        "chingho-rank-4": colors.red[400],
      },
      animation: {
        leftZoom: "leftZoom 6s ease-in-out infinite",
        rightZoom: "rightZoom 6s ease-in-out infinite",
        clickAndDrag: "clickAndDrag 6s ease-in-out infinite",
        leftDrag: "leftDrag 3s ease-in-out infinite",
        rightDrag: "rightDrag 3s ease-in-out infinite",
      },
      keyframes: {
        leftZoom: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(150%, 0) scale(1.2)" },
          "60%": { transform: "translate(150%, 0) scale(1.2)" },
          "75%": { transform: "translate(0, 0)" },
        },
        rightZoom: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-150%, 0) scale(1.2)" },
          "60%": { transform: "translate(-150%, 0) scale(1.2)" },
          "75%": { transform: "translate(0, 0)" },
        },
        clickAndDrag: {
          "10%": { transform: "scale(0.8)" },
          "25%": { transform: "scale(0.8) translate(80%, 0)" },
          "35%": { transform: "scale(0.8) translate(-80%, 0)" },
          "50%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        leftDrag: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-80%, 0)" },
        },
        rightDrag: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(80%, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
