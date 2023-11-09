/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        yellow: ["#FFCB14"],
      },
      fontFamily: {
        ClashDisplayReg: ["ClashDisplayReg", "sans-serif"],
        ClashDisplayMed: ["ClashDisplayMed", "sans-serif"],
        ClashDisplayBold: ["ClashDisplayBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
