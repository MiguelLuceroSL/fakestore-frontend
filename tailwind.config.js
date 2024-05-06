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
      },
      height: {
        'custom26': '26rem',
        'custom28': '28rem',
        'custom30': '30rem',
        'custom32': '32rem',
        'custom34': '34rem',
        'custom40': '40rem',
      },
    },
  },
  plugins: [],
}

