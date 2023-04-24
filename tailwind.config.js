/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff9d01',
        'secondary': '#051f3e',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}