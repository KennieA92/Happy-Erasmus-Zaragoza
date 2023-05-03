/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        burgerTop: {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
          '100%': { transform: 'translateY(7px) rotate(45deg)' },
        },
        burgerBottom: {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
          '100%': { transform: 'translateY(-7px) rotate(-45deg)' },
        },
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
          '0%': { transform: 'translateX(50%) translateY(-25%) rotate(25deg)', opacity: '0' },
          '25': { transform: 'translateX(0) translateY(0) rotate(12deg)', opacity: '0' },
          '50%': { transform: 'translateX(-100%)', opacity: '1' },
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
        'burgerTop': 'burgerTop 0.5s linear 1 forwards',
        'burgerBottom': 'burgerBottom 0.5s linear 1 forwards',
        'textSlideRight': 'scrollingTextRight 20s linear infinite',
        'textSlideleft': 'scrollingTextLeft 10s linear infinite',
        'slide': 'slide 12s linear infinite',
        'slow-fade': 'fadeIn 1s ease-in-out 1',
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
      content: {
        'rotatedbox': ''
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
