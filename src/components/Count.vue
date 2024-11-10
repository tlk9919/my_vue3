<template>
    <div class="app">
    <h2>Now Sum：{{sum }}  放大十倍：{{bigSum  }}</h2>
    <h2>School：{{ school }}   大写：{{ upperSchool }}</h2>
    <h2>Adress：{{ address }}</h2>
    <!-- <select  v-model="n" >的话vaule前面加: -->
    <select  v-model.number="n" >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
    </div>
    
    </template>
    
    <script   setup lang="ts"  name="Count">
   import { reactive, ref, toRefs } from 'vue';
   import { useCountStore } from '@/store/count'
   import { storeToRefs } from 'pinia';

   const countStore=useCountStore()
   const{sum,school,address,bigSum,upperSchool}=storeToRefs(countStore)
//    const{sum,school,address}=toRefs(countStore)//把store所有的数全部变成ref
//    console.log('***********',toRefs(countStore))
// console.log(countStore)
let n=ref(1)//用户选择的数据 

function add(){
//第一种修改方式
//   countStore.sum+=1

// 第二种批量修改方式
// countStore.$patch({
//     school:'成都理工',
//     address:'成都'
// })

//第三种修改方式    
countStore.increment(n.value)

}


function minus(){
    countStore.sum-=n.value

}
    </script>
    
    <style scoped>
    .app{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: auto;
    }
select,button{
    margin: 0,5px;
    height: 25px;
}
    </style>