/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.25rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      fontFamily: "IRANSans, system-ui, sans-serif",
      colors: {
        "flag-green": "rgb(var(--color-flag-green) / <alpha-value>)",
        "flag-gold": "rgb(var(--color-flag-gold) / <alpha-value>)",
        "flag-red": "rgb(var(--color-flag-red) / <alpha-value>)",

        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-hc": "rgb(var(--color-primary-hc) / <alpha-value>)",
        "primary-lc": "rgb(var(--color-primary-lc) / <alpha-value>)",
      },
      brightness: {
        60: ".60",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),

    // https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const newVars =
            typeof value === "string"
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);
          return { ...vars, ...newVars };
        }, {});
      }
      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
};
