/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0671E0",
        secondary: "#EEF5FC",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlack: "#212121",
        dimmerBlack: "#717171",
        dimmestBlack: "#4D4D4D",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
