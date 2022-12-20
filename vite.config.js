import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver,VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(),VantResolver()],
      })
    ],
    /* css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 75, // 1rem的大小
            propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          })
        ]
      }
    } */
  })
