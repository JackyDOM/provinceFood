/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'konkhmer-sleokchher': ['Konkhmer Sleokchher', 'sans-serif'],
        abc: ['Konkhmer Sleokchher', "system-ui"],
        dbc: ['Noto Sans Khmer', 'sans-serif'],
        hid: ['Gowun Dodum', 'sans-serif'],
        koi: ['Merriweather', 'serif'],
        kil: ['Roboto Slab', 'serif']
      },
    },
  },
  plugins: [],
}