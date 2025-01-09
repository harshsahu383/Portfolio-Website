/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        code: ['"Source Code Pro"', 'monospace'],
      },
      fontWeight: {
        extrabold: '800',
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

