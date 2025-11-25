/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        'cousine': ['Cousine', 'monospace']
      },
      colors: {
        'custom-dark': '#18272F',
        'custom-light': '#F5F5F5',
        'custom-teal': '#2e898e8a',
        'bg-dark': '#304050',
      }
    }
  },
  plugins: []
} 