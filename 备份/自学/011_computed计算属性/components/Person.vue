<template>
   <div class="person">
    姓：<input type="text" v-model="FirstName"> <br>
    <!-- 为什么 姓：<input type="text" v-bind="FirstName"> <br>报错而姓：<input type="text" v-model="FirstName"> <br>不报错 -->
    名：<input type="text" v-model="LastName"> <br>
    全名：<span>{{ FullName }}</span>
    <button @click="ChangeFullName">修改名字为li-si</button>
   </div>
    </template>
    <script lang="ts" setup name="Person" >
import {ref,computed} from 'vue'

let FirstName=ref('张')
let LastName=ref('三')
//这样定义的FullName是只读的
// let FullName=computed(()=>{
//     console.log(1)//若是用方法就是调用很多次
//     return FirstName.value.slice(0,1).toUpperCase()+FirstName.value.slice(1)+'-'+LastName.value
// })

let FullName=computed({
    get(){
        return FirstName.value.slice(0,1).toUpperCase()+FirstName.value.slice(1)+'-'+LastName.value
    },

    set(val){ 
        const [str1, str2]=val.split('-')
        console.log('set',val)
        FirstName.value=str1
        LastName.value=str2
    }
    
}) 

function ChangeFullName(){
    // FullName.value='li-si' 无法为“value”赋值，因为它是只读属性。
    FullName.value='li-si'
}
     </script>
    <style>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: auto;
    }
    </style>