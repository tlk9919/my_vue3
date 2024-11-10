//创建一个路由并且暴露出去

//第一步：创建createRouter
import {createRouter,createMemoryHistory} from 'vue-router'
//引入要呈现的组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'
//第二步：创建路由器,路由是一一对应 key和vaule,所以有path和component
const router=createRouter({
    history:createMemoryHistory(), //路由器的工作模式
    routes:[//一个一个的路由规则
        {
        path:'/home',
        component :Home //path 和 component 是系统预定义的属性
         },

         {
            path:'/news',
            component :News //path 和 component 是系统预定义的属性
             },
      {
                path:'/about',
                component :About //path 和 component 是系统预定义的属性
                 }
]
        
})
//暴露router    
export default router