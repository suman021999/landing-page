/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'olg': '4px 7px 9px 2px rgb(0 0 0 / 45%)',
        'ol': 'inset 3px -3px 4px 0px rgb(0 0 0 / 45%)',
        'ma':'0px 6px 35px 0px #00000063',
      }
    },
  },
  plugins: [],
}

