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
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "3.5xl": "2.2rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      spacing: {
        600: "600px",
        800: "800px",
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
  plugins: [require("daisyui")],
};
