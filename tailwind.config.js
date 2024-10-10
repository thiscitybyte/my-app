/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all your component files are included
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007bff', // Add your own custom colors
        'secondary': '#6c757d',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'], // Customize fonts
      },
      spacing: {
        '72': '18rem', // Add custom spacing values
      },
    },
  },
  plugins: [],
}