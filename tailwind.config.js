/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#090e22',
        'primary-white': '#f0d9c7',
        'accent-red': '#b32030',
        'accent-orange': '#ef8203',
      }
    },
  },
  plugins: [],
}

