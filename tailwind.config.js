/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        periwinkle: {
          50: '#f8f9ff',
          100: '#f0f2ff',
          200: '#e6e9ff',
          300: '#d1d6ff',
          400: '#b3baff',
          500: '#8b8fff',
          600: '#6b6bff',
          700: '#5a5aef',
          800: '#4a4ac7',
          900: '#3f3fa3',
        },
        blue: {
          50: '#f0f8ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        cream: {
          50: '#fefefe',
          100: '#fdfcfb',
          200: '#faf8f5',
          300: '#f6f3ed',
          400: '#f0ebe2',
          500: '#e8e0d4',
          600: '#d4c7b8',
          700: '#b8a795',
          800: '#9a8a78',
          900: '#7d7264',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 143, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 143, 255, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 