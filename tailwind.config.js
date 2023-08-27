/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        btn: {
          background: 'hsl(var(--btn-background))',
          'background-hover': 'hsl(var(--btn-background-hover))',
        },
        brand: {
          50: '#f0f4fd',
          100: '#e3ebfc',
          200: '#ccd9f9',
          300: '#adc0f4',
          400: '#8c9eed',
          500: '#707ee4',
          600: '#555ad6',
          700: '#4648bc',
          800: '#3b3f98',
          900: '#363a79',
          950: '#191a38',
        },
        'brand-alt': {
          50: '#fff9eb',
          100: '#fdecc8',
          200: '#fbd88c',
          300: '#f9bf52',
          400: '#f7a628',
          500: '#f1830f',
          600: '#d5600a',
          700: '#b1400c',
          800: '#903310',
          900: '#762b11',
          950: '#441304',
        },
      },
    },
  },
  plugins: [],
};
