<template>
    <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png"alt="">
    </div>
    </template>
    <script setup lang="ts"name="Home">

    import { onMounted } from 'vue';
//引入路由器
import { useRouter } from 'vue-router';
const router=useRouter()
    // onMounted(()=>{
    //     //编写代码实现跳转,而< RouterLink/>不行
    //     setTimeout(()=>{
    //         //编程式路由导航 >>=< RouterLink/>
    //         router.push("/news")
    //     },3000)
    // })
    // </script>
    <style scoped>
 
    .home{   display:flex;
    justify-content:center;
    align-items:center;
    height:100%;}
    </style>
    