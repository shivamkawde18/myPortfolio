/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        black: "#111111",
        white: "#FFFFFF",
        neutral: "#18181B",
        "neutral-border": "#4B4C52",
      },
      animation: {
        "spin-slow": "spin 9s linear infinite",
      },
      backgroundImage: {
        "blue-purple-gradient":
          "linear-gradient(176deg, #2930A9 10.97%, #5D6BD1 290%)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        header: "3.5rem",
      },
    },
  },
  plugins: [],
};
