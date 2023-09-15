/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "standard-bg": "url('./assets/bg.jpeg')"
      }
    },
  },
  plugins: [],
};
