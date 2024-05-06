/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-serif-display': ['DM Serif Display', 'serif'],
        'belleza': ['Belleza', 'sans-serif']
      }
    },
  },
  plugins: [],
}

