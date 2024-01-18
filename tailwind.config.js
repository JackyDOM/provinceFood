/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'konkhmer-sleokchher': ['Konkhmer Sleokchher', 'sans-serif'],
        abc: ['Konkhmer Sleokchher', "system-ui"]
      },
    },
  },
  plugins: [],
}