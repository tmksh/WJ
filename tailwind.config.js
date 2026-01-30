/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-000": "var(--black-000)",
        "grey-1": "var(--grey-1)",
        "grey-2": "var(--grey-2)",
        "light-blue": "var(--light-blue)",
        main: "var(--main)",
        text: "var(--text)",
        white: "var(--white)",
      },
      boxShadow: {
        "": "var(--)",
        PC: "var(--PC)",
      },
    },
  },
  plugins: [],
};
