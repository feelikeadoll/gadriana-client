/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        aboutImg: "url('/src/assets/about-img.jpg')",
        servicesImg1: "url('/src/assets/services-img1.jpg')",
        servicesImg2: "url('/src/assets/services-img2.jpg')",
        before: "linear-gradient(to left, rgba(255, 255, 255, 0), white);",
        after: "linear-gradient(to right, rgba(255, 255, 255, 0), white);",
      },

      spacing: {
        128: "1100px",
        wlogos: "1653px",
        hlogos: "95px",
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
