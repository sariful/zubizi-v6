const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './source/html/**/*.html',  // Adjust this based on your file structure
    './source/js/**/*.js',      // For any JavaScript files that use Tailwind classes
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FF7E5F, #FEB47B)',
      },
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
