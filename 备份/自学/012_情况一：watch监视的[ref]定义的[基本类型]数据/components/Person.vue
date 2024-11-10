<template>
   <div class="person">
<h1>情况一：watch监视的[ref]定义的[基本类型]数据</h1>
  <h2>当前求和值：{{ sum }}</h2>
    <button @click="ChangeSum">单击我加1</button>
   </div>
    </template>
    <script lang="ts" setup name="Person" >
import {ref,watch} from 'vue'

//数据
let sum=ref(0)

//方法
function ChangeSum(){
    sum.value+=1
}

//监视
// watch(谁？，回调函数)情况一：watch监视的[ref]定义的[基本类型]数据，sum不需要.value
const stopWtach= watch(sum,(newValue,oldValue)=>{
if(newValue >=10 ){
    stopWtach()
}
console.log('sum变化了',newValue,oldValue)})
     </script>
    <style>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: auto;
    }
    </style>