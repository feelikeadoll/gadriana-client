/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        aboutImg: "url('/src/assets/about-img.jpg')",
      },
      spacing: {
        128: "1100px",
      },
    },
    fontFamily: {
      avenir: ["Avenir Light", "sans-serif"],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [],
};
