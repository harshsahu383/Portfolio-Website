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
        floating: 'floating 3s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0 },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0)' }, // Start and end positions (no movement)
          '50%': { transform: 'translateY(-15px)' },  // Midway position (slightly up)
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

