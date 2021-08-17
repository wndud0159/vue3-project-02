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
        lighter: "#D4E5F4",
        // 네이버
        naver: '#00C43B',
        // 카카오
        kakao: '#FFEB34'
      },
      backgroundImage: theme => ({
        'checklist': "url('/checklist02.png')",
        'will': "url('/will01.png')",
        'checklist-pc': "url('/checklist02.png')",
        'will-pc': "url('/will01.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
