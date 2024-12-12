import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
//Element Plus 按需要导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [
      //1.配置 Element Plus 采用sass配色系统
      ElementPlusResolver({importStyle: 'sass'})],
  }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },css: {
    preprocessorOptions: {
      scss: {
        //2.覆盖，自动导入定制化样式文件进行样式覆盖
        additionalData: `@use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;
        `

      }
    }
  }
})
