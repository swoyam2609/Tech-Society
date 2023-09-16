/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "standard-bg": "url('./assets/bg.jpeg')"
      },
      fontSize: {
        '4.5xl': '2.5rem', // You can adjust the size as needed
      },
    },
  },
  plugins: [],
};
