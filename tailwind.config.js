/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Space-themed color palette
        cosmic: {
          void: '#0B0E1A',
          dark: '#1A1F3A',
          blue: '#4A7BA7',
        },
        nebula: {
          dark: '#1A1F3A',
        },
        stellar: {
          blue: '#2D4A7A',
        },
        stardust: '#E8F4FD',
        moonbeam: '#B8D4F0',
        aurora: '#7DD3FC',
        plasma: '#A78BFA',
        asteroid: '#374151',
        meteor: '#6B7280',
        satellite: '#9CA3AF',
        'cosmic-dust': '#D1D5DB',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0B0E1A 0%, #1A1F3A 50%, #2D4A7A 100%)',
        'aurora-gradient': 'linear-gradient(135deg, #7DD3FC 0%, #A78BFA 100%)',
        'stardust-gradient': 'linear-gradient(135deg, #E8F4FD 0%, #B8D4F0 100%)',
        'nebula-gradient': 'linear-gradient(180deg, #0B0E1A 0%, #1A1F3A 100%)',
      },
      fontFamily: {
        'space': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px rgba(125, 211, 252, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(125, 211, 252, 0.8)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
