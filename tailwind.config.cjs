/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg) translateY(5rem)' },
          '50%': { transform: 'rotate(15deg) translateY(0)' },
        },
        opacity: {
          '0%, 100%': { opacity: 0.75, transform: 'rotate(-15deg)' },
          '50%': { opacity: 1, transform: 'rotate(15deg)' },
        },
        translate: {
          '0%, 100%': { transform: 'translateY(50%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'spin-slow': 'opacity 10s infinite, spin 10s linear infinite',
        wiggle: 'opacity 3s infinite, wiggle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio")
  ],
};
