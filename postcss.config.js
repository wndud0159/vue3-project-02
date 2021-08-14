module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  devServer: {
          proxy: 'http://localhost:3000/will',
  }
}
