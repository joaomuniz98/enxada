/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "@section": "clamp(5em, 21vh, 12em)",
        "@container": "clamp(2.5em, 8vw, 8em)",
        "@gap": "clamp(1.5em, 4vw, 2.5em)",
        "@lg": "9vw",
        "@md": "3vw",
        "@sm": "1.75vw",
      },
    },
  },
  plugins: [],
};
