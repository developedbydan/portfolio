/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAFF74",
        secondary: "#F7FFE1",
        navBg: "#111309",
        navText: "#B1B1B1",
      },
      fontFamily: {
        alex: ["'Alex Brush'", "cursive"],
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
