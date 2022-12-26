//全局导入components文件夹下所有页面
import { defineAsyncComponent } from 'vue'
const modulesFiles = import.meta.glob('@/components/**/**.vue',{ eager: true }); // 异步方式
export default function install(app) {
  for (const [key, value] of Object.entries(modulesFiles)) {
    const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    app.component(name, defineAsyncComponent(value));
  }
}