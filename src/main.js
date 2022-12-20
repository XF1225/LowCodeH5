import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import 'amfe-flexible'
const app = createApp(App)
app.mount('#app')

//全局导入components文件夹下所有页面
const modulesFiles = import.meta.glob('./components/**/**.vue',{ eager: true }); // 异步方式
let modules = {}
for (const [key, value] of Object.entries(modulesFiles)) {
  var moduleName = key.replace(/^\.\/(.*)\.\w+$/, '$1')
  const name = moduleName.split('/')[moduleName.split('/').length - 1]
  //console.log(name)
  //具体的内容，都是每个js中返回值  value.default
  modules[name] = value.default
}
