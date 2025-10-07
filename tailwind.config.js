/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/**/*.{html,ts,mdx}',     // Angular templates + stories
    './**/*.stories.@(ts|mdx)'           // extra guard for SB stories
  ],
  theme: { 
    extend: {
      colors: {
        // Saga-blue color palette
        'saga-blue': {
          50: '#f4fafe',
          100: '#cae6fc',
          200: '#a0d2fa',
          300: '#75bef8',
          400: '#4baaf5',
          500: '#2196f3', // Main saga-blue
          600: '#1c80cf',
          700: '#1769aa',
          800: '#125386',
          900: '#0d3c61'
        },
        // Surface colors
        'surface': {
          'ground': '#f8f9fa',
          'section': '#ffffff',
          'card': '#ffffff',
          'overlay': '#ffffff',
          'border': '#dee2e6',
          'hover': '#e9ecef'
        },
        // Text colors
        'text': {
          'primary': '#495057',
          'secondary': '#6c757d',
          'disabled': '#adb5bd'
        }
      }
    }
  },
  plugins: [require('tailwindcss-primeui')]
};
