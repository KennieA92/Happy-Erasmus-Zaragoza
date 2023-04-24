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
        'primary': '#91B187',
        'secondary': '#EDDCA8',
      },
      backgroundImage: {
        'background': "url('/src/assets/background.svg')",
        'albarracin': "url('/src/assets/albarracin.svg')",
        'bardenas': "url('/src/assets/bardenas.svg')",
        'pais_vasco': "url('/src/assets/pais_vasco.svg')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
