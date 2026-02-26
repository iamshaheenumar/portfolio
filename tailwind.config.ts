import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        mono: ["DM Mono", "monospace"],
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        bg: "#0a0a08",
        surface: "#121210",
        accent: "#c8f060",
        accent2: "#60c8f0",
        muted: "#7a7870",
        border: "rgba(255,255,255,0.07)",
      },
    },
  },
  plugins: [],
};
export default config;
