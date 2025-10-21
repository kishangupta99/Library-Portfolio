/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand': {
          'light': '#3b82f6', // blue-500
          'dark': '#1e40af', // blue-800
        },
        'neutral': {
          'light': '#f5f5f5', // neutral-100
          'dark': '#171717', // neutral-900
        },
      },
    },
  },
  plugins: [],
}