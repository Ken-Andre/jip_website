/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // JIP Brand Colors
        primary: {
          50: '#f4f2fa',
          100: '#e8e3f5',
          200: '#d1c9ed',
          300: '#b4a3e2',
          400: '#9474d2',
          500: '#6B3FB5', // Primary violet
          600: '#593899',
          700: '#473179',
          800: '#39295f',
          900: '#2e204d',
        },
        secondary: {
          50: '#fdf9f0',
          100: '#faf0db',
          200: '#f4deba',
          300: '#ebc58e',
          400: '#dea45a',
          500: '#D4AF37', // Secondary gold
          600: '#d4a329',
          700: '#b08821',
          800: '#8c6c1b',
          900: '#725916',
        },
        accent: {
          50: '#ffffff',
          100: '#ffffff',
          500: '#FFFFFF', // Pure white
        },
        text: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1F1F1F', // Primary text color
        },
        background: {
          50: '#F5F5F0', // Cream background
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '40px',
        '2xl': '48px',
        '3xl': '56px',
        '4xl': '64px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0,0,0,0.08)',
        'md': '0 8px 16px rgba(0,0,0,0.12)',
        'lg': '0 16px 32px rgba(0,0,0,0.16)',
      }
    },
  },
  plugins: [],
}