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
        'checklist': "url('http://picsum.photos/id/430/500/350')",
        'will': "url('http://picsum.photos/id/798/500/350')",
        'checklist-pc': "url('http://picsum.photos/id/430/800/350')",
        'will-pc': "url('http://picsum.photos/id/798/800/350')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
