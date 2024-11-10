<template>
    <div class="about">
    <h2>大家好，欢迎来到尚硅谷直播间</h2>
    </div>
    </template>
    <script setup lang="ts"name="About">
    import { onMounted,onUnmounted } from 'vue';
    onMounted(()=>{
        console.log('About组件挂载了')
    })

    onUnmounted(()=>{
        console.log('About组件卸载了')
    })
    // 通过点击导航，视觉效果上“消失”了的路由组件，默认是被卸载掉的，需要的时候再去挂载。
    </script>
    <style scoped>
    .about
    {display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    font-size:18px;
    }
    </style>
    