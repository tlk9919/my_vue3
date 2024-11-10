<template>
   <div class="person">
    <h1>request:当水温达60℃，水位达80cm，向服务器发送请求</h1>
<h2>当前水温：{{ temp}} ℃</h2>
<h2>当前水位：{{ height}} cm</h2>
<button @click="ChangeTemp"> 点击我水温加10</button>
<button @click="ChangeHeight"> 点击我水温加10</button>
   </div>
    </template>
    <script lang="ts" setup name="Person" >
import {ref, watch,watchEffect} from 'vue'

//数据
let temp=ref(0)
let height=ref(0)

//方法
function ChangeTemp(){
    temp.value+=10
}
function ChangeHeight(){
    height.value+=10
}

//监视
/* watch([temp,height],(Value)=>{
    // console.log(Value)
    //从Value获取数据
    let[newTemp,newHeight]=Value
    if(newTemp>=60 || newHeight>=80)
{console.log('发送请求')}
})
 */
//watchEffect监视
watchEffect(()=>{
    if(temp.value>=60 || height.value>=80){console.log('发送请求')}
})
     </script>
    <style>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: auto;  
    }
    button{
        margin: 20px;
    }
    </style>