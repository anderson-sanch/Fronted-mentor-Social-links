/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Green': 'hsl(75, 94%, 57%)',
        'White': 'hsl(0, 0%, 100%)',
        'Grey-700': 'hsl(0, 0%, 20%)',
        'Grey-800': 'hsl(0, 0%, 12%)',
        'Grey-900': 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        custom: ['miFuente', 'sans-serif']
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
}

