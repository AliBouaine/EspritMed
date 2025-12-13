/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],  // ← Added closing quote here
  theme: {
    extend: {
      colors: {
        primary: "#314584",
        secondary: "#ff3946",
        tertiary: "#6e757a",
      },
      fontFamily: {
        body: ["Work Sans"],
      },
      fontSize: {
        navSize: "24px",
        heroSize: "74px",
        pSize: "18px",
      },
    },
  },
  plugins: [],
}