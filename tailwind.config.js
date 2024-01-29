/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        xuandong: ['xuandong', 'sans-serif'],
        AlimamaFangYuanTi: ['AlimamaFangYuanTi', 'sans-serif'],
        yangrendong: ['yangrendong', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
