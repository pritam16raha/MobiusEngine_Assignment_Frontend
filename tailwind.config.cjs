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
        primary: "#0649E7", // Primary Blue
        secondary: "#022183", // Dark Secondary
        white: "#FEFEFE", // White
        light: "#EBF1FF", // Light Background
        black: "#101010", // Black
      },
      maxWidth: {
        container: "1500px", // Max Width for the whole page
        secondary_container: "1300px",
      },
      borderRadius: {
        xl: "20px", // Round Corners = 20
      },
      backdropBlur: {
        xs: "4px",
        sm: "14px", // Blur 14px (for button background)
      },
      strokeWidth: {
        1: "1", // Stroke 1px (for ebook button icon)
      },
    },

    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1500px", // Set container width
      },
    },
  },
  plugins: [],
};
