/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/scripts/*.js",
    "./build/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'frank-ruhl-libre': ['Frank Ruhl Libre', 'ui-serif'],
        'lato': ['Lato', 'ui-sans-serif'],
        'libre-display': ['Libre Caslon Display', 'ui-serif'],
        'libre-text': ['Libre Caslon Text', 'ui-serif'],
        'oswald': ['Oswald', 'ui-sans-serif'],
        'roboto-slab': ['Roboto Slab', 'ui-serif']
      },
      backgroundImage: {
        'galaxy-gif': "url('../images/galaxy.gif')",
      },
      
    },
  },
  plugins: [],
}