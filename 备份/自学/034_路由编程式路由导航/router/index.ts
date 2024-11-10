//创建一个路由并且暴露出去

//第一步：创建createRouter
import {createRouter,createWebHistory} from 'vue-router'
//引入要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'
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
    history:createWebHistory(), //路由器的工作模式,history模式
    // history:createWebHashHistory(), //路由器的工作模式,hash模式
    routes:[//一个一个的路由规则
        {
        name:'zhuye',
        path:'/home',
        component :Home //path 和 component 是系统预定义的属性
         },

         {
            name:'xinwen',
            path:'/news',
            component :News, //path 和 component 是系统预定义的属性
            children:[
            {
                name:'xiang',
                path:'detail/:id/:title/:content',//不用加“/”
                component:Detail,
                //第一种写法：将路由收到的所有  params 参数作为props传递给路由组件
                // props:true,

                 //第二种写法：函数写法，自己决定将什么作为props给路由组件
                //  props(qwe){
                //     // console.log('&&&&&&&&&&',qwe)  测试出是路由
                //     return{

                //     }
                //  }
                  //第二种写法：函数写法，自己决定将什么作为props给路由组件
               props(route){
                return route.query
               }
                  //第三种写法：对象写法，自己决定将什么作为props给路由组件
                //   props:{
                //     a:12,
                //     b:21,
                //     c:133
                //   }
            }
            ]
             },
      {
                name:'guanyu',
                path:'/about',
                component :About //path 和 component 是系统预定义的属性
                 }
]
        
})
//暴露router    
export default router