/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FDF6E3',
        saffron: '#E09F3E',
        maroon: '#8C1C13',
        forest: '#2E5B48',
        royal: '#214478',
      },
    },
  },
  plugins: [],
}
