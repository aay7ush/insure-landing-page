/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        headings: ["DM Serif Display", "serif"],
      },
      colors: {
        "dark-violet-400": "hsl(256, 26%, 20%)",
        "dark-violet-600": "hsl(270, 9%, 17%)",
        "grayish-blue": "hsl(216, 30%, 68%)",
        "grayish-violet-600": "hsl(273, 4%, 51%)",
        "light-gray-200": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
}
