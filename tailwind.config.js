/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }        ,
      backgroundImage: {
        "standard-bg": "url('./assets/bg.jpeg')",
         "standard-bg-2": "url('./assets/standard-bg-2.png')",
         "leaders-bg": "url('./assets/home/leaders1.jpeg')"
      },
      fontSize: {
        '4.5xl': '2.5rem', // You can adjust the size as needed
      },
    },
  },
  plugins: [],
};
