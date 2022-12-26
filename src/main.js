import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import 'amfe-flexible'
import batchImport from '@/utils/batchImport'
const app = createApp(App)
app.use(batchImport)
app.mount('#app')
