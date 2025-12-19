<<<<<<< HEAD
export default {
  content: [
    "./public/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#314584",
        secondary: "#ff9346",
        tertiary: "#6e757a",
      },
      fontFamily: {
        body: ["Work Sans", "sans-serif"],
      },
      fontSize: {
        navSize: "24px",
        heroSize: "74px",
        pSize: "18px",
      },
    },
  },
  plugins: [],
};
>>>>>>> ca09eb104672c0f83e7eba038693702bad21122c
