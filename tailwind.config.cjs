/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#0649E7",
        secondary: "#022183", 
        white: "#FEFEFE", 
        light: "#EBF1FF", 
        black: "#101010",
      },
      maxWidth: {
        container: "1500px", 
        secondary_container: "1300px",
      },
      borderRadius: {
        xl: "20px", 
      },
      backdropBlur: {
        xs: "4px",
        sm: "14px",
      },
      strokeWidth: {
        1: "1", 
      },
    },

    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1500px", 
      },
    },
  },
  plugins: [],
};
