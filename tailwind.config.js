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
        gridReact: "#012026",
        gridMongo: "#0A1809",
        gridGit: "#100900",
        gridExpress: "#111111",
        gridTailwind: "#031C1E",
        gridFigma: "#180D26",
      },
      fontFamily: {
        alex: ["'Alex Brush'", "cursive"],
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
