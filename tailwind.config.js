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
          '0%': { transform: 'rotate(30deg) translate(200px,50px)' },
          '100%': { transform: 'rotate(0deg) translate(0,0)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease',
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      margin: ["group-hover"],
      visibility: ["group-hover"],
      scale: ["group-hover"],
      overflow: ["group-hover"],
      translate: ["group-hover"]
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
