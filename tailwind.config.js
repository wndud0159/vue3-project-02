module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans' : ['Jeju Myeongjo', 'serif']
    },
    extend: {
      colors: {
        // 기본
        primary: "#004741",
        // 클릭시 hover
        dark: "#0A1B1D",
        // 못누르는
        light: "#9EC3C1",
        // 클릭시 hover
        lighter: "#E4EDED",
        // 네이버
        naver: '#00C43B',
        // 카카오
        kakao: '#FFEB34',
        //
        bg_01: 'f7fdfd',
      },
      backgroundImage: theme => ({
        'will': "url('/bg_03.png')",
        
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
