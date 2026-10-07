/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pustam-blue': 'var(--pustam-blue, #283890)',
        'pustam-yellow': 'var(--pustam-yellow, #f0e846)',
        'pustam-orange': 'var(--pustam-orange, #ff740e)',
      },
      fontFamily: {
        headline: ['Fredoka', 'sans-serif'],
        body: ['"Be Vietnam Pro"', '"Be Vietnam"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
