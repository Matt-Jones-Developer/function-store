/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        floating: 'floating 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        floating: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 15px)' },
          '100%': { transform: 'translate(0, -0px)' },
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
