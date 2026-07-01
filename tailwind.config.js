/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Huracán — the single periwinkle accent (#6F9BFF), one hue across shades.
        brand: {
          50: '#eff3ff',
          100: '#dbe4ff',
          200: '#c2d2ff',
          300: '#9db5ff',
          400: '#7ea3ff',
          500: '#6f9bff',
          600: '#5a82f0',
          700: '#4d6fe0',
          800: '#3f5ac0',
          900: '#374e9c',
          950: '#212f63',
        },
        // Huracán inks — near-black canvas with faint depth (never pure #000).
        navy: {
          800: '#0a0e1a',
          900: '#05070D',
          950: '#04060C',
        },
        // Electric-blue "pop" — CTAs, highlights, aurora glows (Beam/Kinso accent).
        electric: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bfe3ff',
          300: '#93d2ff',
          400: '#5cb8ff',
          500: '#3aa5ff',
          600: '#0099ff',
          700: '#0077dd',
          800: '#0a60b0',
          900: '#0e4f8c',
        },
        // Warm accent hues — illustrations, gradients, category coding (Kinso warmth).
        coral: {
          50: '#fdf3ef',
          100: '#fbe3da',
          400: '#e89c80',
          500: '#de8363',
          600: '#c96a4a',
          700: '#a8543a',
        },
        sand: {
          50: '#fdf8f0',
          100: '#fbeed9',
          400: '#f1cc9d',
          500: '#edbf86',
          600: '#d9a45f',
          700: '#b07f3f',
        },
        teal: {
          50: '#eef8f7',
          100: '#d6efed',
          400: '#84ccc8',
          500: '#67bcb7',
          600: '#4ea19c',
          700: '#3a807c',
        },
        grape: {
          50: '#f4f0fb',
          100: '#e6dcf6',
          400: '#a486d8',
          500: '#7c5ac5',
          600: '#6845ab',
          700: '#523686',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
