/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "search-grey": "#262424",
        "dark-grey": "#121112",
        "dark-grey-2": "#1B1819",
        "dark-grey-3": "#D6D2D3",
        "dark-grey-4": "#534D4E",
      },
    },
  },
  plugins: [],
};
