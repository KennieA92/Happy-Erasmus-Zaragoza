/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '30%': {
            transform: 'translateX(0)',
          },
          '35%': {
            transform: 'translateX(-100%)',
          },
          '65%': {
            transform: 'translateX(-100%)',
          },
          '70%': {
            transform: 'translateX(-200%)',
          },
          '98%': {
            transform: 'translateX(-200%)',
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        slideIn: {
          '0%': { transform: 'translateX(-1000px)' },
          '100%': { transform: 'translateX(0)' },
        },
        translate: {
          '0%, 100%': { transform: 'translateY(50%)' },
          '50%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'slide': 'slide 12s linear infinite',
        'slow-fade': 'fadeIn 3s ease-in-out 1',
        'spin-slow': 'spin 6s linear infinite',
        'slide-in': 'slideIn 2s ease-in-out 1',
      },
      colors: {
        'primary': '#D68C45',
        'secondary': '#4C956C',
        'tertiary': '#FBFCFC',
        'quaternary': '#FEFEE3',
        'text-secondary': '#2C6E49',
        'accent': '#233D4D',
      },
      backgroundImage: {
        'background': "url('/src/assets/background.svg')",
        'albarracin': "url('/src/assets/albarracin.svg')",
        'bardenas': "url('/src/assets/bardenas.svg')",
        'pais_vasco': "url('/src/assets/pais_vasco.svg')",
      },
      fontFamily: {
        'sourcecodepro': ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
