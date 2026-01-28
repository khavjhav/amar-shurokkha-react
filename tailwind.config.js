/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bd: {
          red: '#F42A41',
          green: '#006A4E',
        },
      },
    },
  },
  plugins: [],
}
