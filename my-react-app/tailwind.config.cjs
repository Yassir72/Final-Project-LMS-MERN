/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
      marquee: 'marquee 20s linear infinite',
      marquee2: 'marquee2 20s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
    minHeight: {
      32: "8rem", // Hauteur uniforme
    },
    minWidth: {
      20: "5rem", // Largeur uniforme
    },
  },
  },
  
  plugins: [],
});
