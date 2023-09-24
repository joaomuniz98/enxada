/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "var(--font-poppins)"
      },
      colors: {
        "@primary": "#9EC913",
        "@secondary": "#7CB518",
        "@dark": "#0E0C2B",
        "@dark-sec": "#24214A"
      },
      spacing: {
        "@section": "clamp(5em, 21vh, 12em)",
        "@container": "clamp(2.5em, 8vw, 8em)",
        "@gap": "clamp(1.5em, 4vw, 2.5em)",
        "@lg": "9vw",
        "@md": "3vw",
        "@sm": "1.75vw",
      },
      maxWidth: {
        "@baseSectionWidth": "100em"
      }
    },
  },
  plugins: [],
};
