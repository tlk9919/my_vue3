//引入createApp创建应用
import{createApp} from 'vue'
//引入App根组件
import App from './App.vue'
//第一步：引入Pinia
import { createPinia } from 'pinia'

// createApp(App).mount('#app')
//创建一个应用
const app=createApp(App)

//第二步：创建pinia
const pinia=createPinia()
//第三步：安装pinia
app.use(pinia)
//挂载整个应用到app容器中
app.mount('#app')   
// const app=createApp(App)
// app.mount('#app')
// 等价于createApp(App).mount('#app')