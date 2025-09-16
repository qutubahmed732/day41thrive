/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#ff5722',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
