module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      mono: ['CascadiaCode']
    },
    extend: {
      colors: {
        brown: {
          100: '#503e29',
          200: '#433422'
        },
        sepia: '#fbe8d3',
        dark: '#1b2133'
      }
    }
  },
  plugins: [require('@tailwindcss/ui')]
}
