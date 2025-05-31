/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Everforest-inspired color palette
        forest: {
          deep: '#232A2E',
          mid: '#343F44',
        },
        pine: {
          dark: '#2D353B',
        },
        sage: '#3D484D',
        snow: '#D3C6AA',
        mist: '#A7C080',
        spring: '#83C092',
        bloom: '#E67E80',
        stone: '#4F585E',
        bark: '#859289',
        moss: '#9DA9A0',
        fog: '#C5CDD0',
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #232A2E 0%, #2D353B 50%, #343F44 100%)',
        'spring-gradient': 'linear-gradient(135deg, #83C092 0%, #A7C080 100%)',
        'mist-gradient': 'linear-gradient(135deg, #D3C6AA 0%, #A7C080 100%)',
        'nature-gradient': 'linear-gradient(180deg, #232A2E 0%, #2D353B 100%)',
      },
      animation: {
        'sway': 'sway 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'breathe': 'breathe 3s ease-in-out infinite',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '50%': { transform: 'translateX(5px) rotate(1deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(131, 192, 146, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(131, 192, 146, 0.8)' },
        },
        'glow-pulse': {
          '0%': { 
            boxShadow: '0 0 8px rgba(131, 192, 146, 0.25), 0 0 16px rgba(131, 192, 146, 0.15), 0 0 24px rgba(131, 192, 146, 0.08)'
          },
          '100%': { 
            boxShadow: '0 0 12px rgba(131, 192, 146, 0.35), 0 0 24px rgba(131, 192, 146, 0.25), 0 0 36px rgba(131, 192, 146, 0.15)'
          },
        },
        breathe: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '0.5': '0.125rem',  // 2px
        '1.5': '0.375rem',  // 6px
        '2.5': '0.625rem',  // 10px
        '3.5': '0.875rem',  // 14px
        '4.5': '1.125rem',  // 18px
        '5.5': '1.375rem',  // 22px
        '6.5': '1.625rem',  // 26px
        '7.5': '1.875rem',  // 30px
        'pb-4.5': '1.125rem', // Custom padding-bottom
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
