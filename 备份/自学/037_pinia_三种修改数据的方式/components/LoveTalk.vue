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