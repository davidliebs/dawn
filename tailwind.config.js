/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  corePlugins: {
    preflight: false,
  },
  safelist: ['order-1', 'order-2'],
  important: true,
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        graphite: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#121416',
        },
        'electric-blue': {
          50: '#e6f7ff',
          100: '#b3e5fc',
          200: '#81d4fa',
          300: '#4fc3f7',
          400: '#29b6f6',
          500: '#03a9f4',
          600: '#039be5',
          700: '#0288d1',
          800: '#0277bd',
          900: '#01579b',
        },
        'off-white': {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#dedede',
          500: '#c2c2c2',
          600: '#979797',
          700: '#818181',
          800: '#606060',
          900: '#3c3c3c',
        },
      },
      fontSize: {
        xs: ['1.2rem', { lineHeight: '1.2rem' }], // 12px
        sm: ['1.4rem', { lineHeight: '1.4rem' }], // 14px
        base: ['1.6rem', { lineHeight: '1.6rem' }], // 16px
        lg: ['1.8rem', { lineHeight: '1.8rem' }], // 18px
        xl: ['2rem', { lineHeight: '2rem' }], // 20px
        '2xl': ['2.4rem', { lineHeight: '2.5rem' }], // 24px
        '3xl': ['3rem', { lineHeight: '3rem' }], // 30px
        '4xl': ['3.6rem', { lineHeight: '3.6rem' }], // 36px
        '5xl': ['4.8rem', { lineHeight: '1' }], // 48px
        '6xl': ['6rem', { lineHeight: '1' }], // 60px
        '7xl': ['7.2rem', { lineHeight: '1' }], // 72px
        '8xl': ['9.6rem', { lineHeight: '1' }], // 96px
        '9xl': ['12.8rem', { lineHeight: '1' }], // 128px
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
