/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: 'var(--sand)',
        slate: 'var(--slate)',
        green: 'var(--green)',
        whiteFade: 'var(--whiteFade)',
      },
      borderColor: {
        sand: 'var(--sand)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        floating: 'floating 1s ease-in-out infinite',
        slideInLeft: 'slideInLeft 0.5s ease-in-out',
        slideOut: 'slideOutCover 0.5s forwards',
        slideDown: 'slideDown 0.5s forwards',
        slideUp: 'slideUp 0.5s forwards',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        floating: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, -5px)' },
          '100%': { transform: 'translate(0, -0px)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-10rem)' },
          '60%': { transform: 'translateX(5rem)' },
          '100%': { opacity: 1, transform: 'translate(0)' }
        },
        slideOut: {
          '0%': { opacity: 0, transform: 'translateX(0%)' },
          '100%': { opacity: 0.9, transform: 'translate(80%)' }
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 0.95, transform: 'translate(0%)' },
        },
        slideUp: {
          '0%': { opacity: 0.95, transform: 'translate(0%)' },
          '100%': { opacity: 0, transform: 'translateY(-100%)' },
        },
      },
      variants: {
        animation: ['responsive', 'motion-safe', 'motion-reduce'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.gradient': {
          background: 'linear-gradient(to right, #82D7F7, #4E46DC)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
