/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class", // or 'media' or 'class'
    extend: {
      colors: {
        pYellow: "#DFAF5E",
        oliveGreen: "61714D",
        lightOlive: "#8FAE93",
      },
      fontFamily: { NunitoSans: "Nunito Sans" },
    },
  },
  plugins: [],
};
