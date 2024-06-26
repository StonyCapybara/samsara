import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#FEF6ED",
      title: "#481C00",
      footer: "#71564B",
      footerText: "#F9EBDE",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "womens-bg": 'url("/womenstitle.png")',
        "mens-bg": 'url("/menstitle.png")',
      },
    },
    fontFamily: {
      aero: ["AeRo", "sans-serif"],
      abhaya: ["abhaya", "serif"],
    },
  },
  plugins: [],
};
export default config;
