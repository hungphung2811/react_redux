module.exports = {
  purge: [
    './public/index.html',
    './src/*.js',
    './src/**/**js',
    './src/**/**jsx',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Montserrat'],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(10deg) translate(100px,0)' },
          '100%': { transform: 'rotate(0deg) translate(0,0)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
