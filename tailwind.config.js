module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 기본
        primary: "#1DA1F2",
        // 클릭시 hover
        dark: "#1a91da",
        // 못누르는
        light: "#a5d0f5",
        // 클릭시 hover
        lighter: "#D4E5F4"
      },
      backgroundImage: theme => ({
        'checklist': "url('http://picsum.photos/id/430/300/300')",
        'will': "url('http://picsum.photos/id/798/300/300')",
        'checklist-pc': "url('http://picsum.photos/id/430/600/350')",
        'will-pc': "url('http://picsum.photos/id/798/600/350')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
