<template>
   <div class="person">
<h1>情况二：watch监视的[ref]定义的[对象类型]数据</h1>
 <h2> Name:{{ person.name }}</h2>
 <h2 >Age: {{ person.age }}</h2>
    <button @click="ChangeName">eidt Name</button>
    <button @click="ChangeAge">eidt Age</button>
    <button @click="ChangePerson">eidt Person</button>
   </div>
    </template>
    <script lang="ts" setup name="Person" >
import {ref,watch} from 'vue'

//数据
let person=ref({
    name:'张山',
    age :18
})

//方法
function ChangeName(){
person.value.name+='$'
}

function ChangeAge(){
    person.value.age+=1
}

function ChangePerson(){
    person.value={
        name:'Mark',
        age:19
    }
}
//监视 情况一：watch监视的[ref]定义的[对象类型]数据，监视的是对象的地址值，若想监视对象内部属性变化，需要手动开启深度监视
//watch第一个参数：被监视的数据
//watch第二个参数：回调函数
//watch第一个参数：配置对象(deep,immediate等)
watch(person,(newVule,oldVaule)=>{
     console.log('person变化了',newVule,oldVaule)
},{deep:true, immediate:true})

     </script>
    <style>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: auto;
    }
    </style>