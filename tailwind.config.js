const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './source/partials/**/*.html',  // Adjust this based on your file structure
    './source/html/**/*.html',  // Adjust this based on your file structure
    './source/js/**/*.js',      // For any JavaScript files that use Tailwind classes
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FF7E5F, #FEB47B)',
        'product-gradient': 'linear-gradient(to right, #eeeeee, #ffffff)',
      },
      colors: {
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
