<template>
    <div class="app">
    <button @click="getLoveWords"> 获取一句土味情话</button>
    <ul>
        <li v-for="talk  in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
    </div>
    
    </template>
    
    <script setup  lang="ts"  name="LoveTalk">
    import { storeToRefs } from 'pinia';
   import { useLoveTalkStore } from '@/store/lovetalk';

   const talkstore=useLoveTalkStore()

   const{ talkList}=storeToRefs(talkstore)

   talkstore.$subscribe((mutate,state)=>{
    console.log('talkstore保存的数据发送了变化', mutate,state)//mutate本次修改的信息,state真正的数据
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
   })


   function getLoveWords(){
    talkstore.getAllTalk()
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