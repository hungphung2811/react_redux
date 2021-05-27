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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
