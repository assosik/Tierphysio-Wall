/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translate(-50%, 0) scale(1)' },
          '50%': { transform: 'translate(-50%, -25%) scale(1.1)' }
        }
      },
      animation: {
        bounce: 'bounce 2s cubic-bezier(0.4, 0, 0.2, 1) infinite'
      }
    },
  },
  plugins: [],
};
