import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import 'amfe-flexible'
import '@vant/touch-emulator' //解决Uploader文件上传组件点击图片预览在pc端显示关闭不了的问题
import batchImport from '@/utils/batchImport'
const app = createApp(App)
app.use(batchImport)
app.mount('#app')
