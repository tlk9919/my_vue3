//创建一个路由并且暴露出去

//第一步：创建createRouter
import {createRouter,createMemoryHistory,createWebHashHistory} from 'vue-router'
//引入要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
//第二步：创建路由器,路由是一一对应 key和vaule,所以有path和component

// <!-- history模式
//               Vue2:mode:'history'
//               Vue3:history:createWebHistory()
//               React:<BrowserRouter>
// hash模式 -->
// <!-- 
// 1.history模式
//    优点：URL更加美观，不带有#，更接近传统的网站URL。
//    缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有44错误。
// const router createRouter({
// history:createWebHistory(),//history模式
// /*★****/
// })
// 2.hash模式
//      优点：兼容性更好，因为不需要服务器端处理路径。
//      缺点：UL带有#不太美观，且在SE0优化方面相对较差。
// const router createRouter({
// history:createWebHashHistory(),//hash模式 -->


const router=createRouter({
    // history:createMemoryHistory(), //路由器的工作模式,history模式
    history:createWebHashHistory(), //路由器的工作模式,hash模式
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