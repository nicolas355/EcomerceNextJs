/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    gradientColors: {
      'purple-pink': {
        'from': 'purple-400',
        'to': 'pink-500',
      },
      'blue-green': {
        'from': 'blue-400',
        'to': 'green-500',
      },
    },
  },
  plugins: [],
}

