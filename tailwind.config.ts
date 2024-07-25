import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bpsOrange: "#E18939",
        bpsGreen: "#75B547",
        bpsLightBlue: "#2D95C9",
        bpsDarkBlue: "#00497D",
        bpsBlue: "#131842",
      },
    },
  },
  plugins: [],
};
export default config;
