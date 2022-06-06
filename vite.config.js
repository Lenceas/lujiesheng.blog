import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@img': '/src/assets/images',
      '@js': '/src/assets/js',
      '@css': '/src/assets/css',
      '@vi': '/src/views',
      '@comp': '/src/components',
    }
  },
  server: {
    host: 'localhost',
    port: '8080',
    open: true,
    proxy: {
      "/api": {
        // 这里改成后端api端口地址，记得每次修改，都需要重新build
        target: "http://api.lujiesheng.cn:8079/api/v1",
        // target: "http://localhost:8079/api/v1",
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})