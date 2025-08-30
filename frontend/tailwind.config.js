module.exports = {
  purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        neonGreen: '#39FF14',
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};