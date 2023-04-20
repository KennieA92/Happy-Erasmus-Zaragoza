/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-1000px)' },
          '100%': { transform: 'translateX(0)' },
        },
        translate: {
          '0%, 100%': { transform: 'translateY(50%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'slide-in': 'slideIn 2s ease-in-out 1',
      },
      colors: {
        'primary': '#91B187',
        'secondary': '#EDDCA8',
      },
      backgroundImage: {
        'background': "url('/src/assets/background.svg')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio")
  ],
};
