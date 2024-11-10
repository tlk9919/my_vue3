<template>
    <div class="app">
    <button @click="getLoveWords"> 获取一句土味情话</button>
    <ul>
        <li v-for="talk  in talkstore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
    </div>
    
    </template>
    
    <script setup  lang="ts"  name="LoveTalk">
   import { reactive } from 'vue';
   import axios from 'axios';
   import { nanoid } from 'nanoid';
   import { useLoveTalkStore } from '@/store/lovetalk';

   const talkstore=useLoveTalkStore()
   async function getLoveWords(){
    //发请求await：这个关键字会暂停函数的执行，直到 axios.get() 返回的 promise 完成
    // 也就是说，等到 API 请求完成并返回结果后，result 变量会存储请求的响应结果。
let result= await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//把请求回来的字符串，包装成一个对象
let obj={id:nanoid(),title:result.data.content}

console.log('obj',obj)
// console.log(result.data.content)
//放到数组中
// talkList.unshift(obj)
   }
 
    </script>
    
    <style scoped>
    .app{
        background-color:orange;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: auto;
    }
    </style>