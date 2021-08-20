import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    // // string shorthand
    // '/foo': 'http://localhost:4567',
    // // with options
    '/api': {
      target: 'https://naveropenapi.apigw.ntruss.com/recog/v1/stt',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    },
    // // with RegEx
    // '^/fallback/.*': {
    //   target: 'http://jsonplaceholder.typicode.com',
    //   changeOrigin: true,
    //   rewrite: (path) => path.replace(/^\/fallback/, '')
    // },
    // // Using the proxy instance
    // '/api': {
    //   target: 'http://jsonplaceholder.typicode.com',
    //   changeOrigin: true,
    //   configure: (proxy, options) => {
    //     // proxy will be an instance of 'http-proxy'
    //   },
    // }
  },
  plugins: [vue()]
})
