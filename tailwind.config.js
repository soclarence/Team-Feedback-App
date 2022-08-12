/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'brightBlue': '#E7E8FF',
        'mainOrange': '#F49D68',
        'mainBlue': '#767DE8',
        'mainBlack': '#1E1E1E',
        'brightGreen' : '#EEFFFB'
      }
    },
  },
  plugins: [],
}
