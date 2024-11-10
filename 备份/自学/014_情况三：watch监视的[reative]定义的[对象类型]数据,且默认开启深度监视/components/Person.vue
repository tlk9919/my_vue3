<template>
   <div class="person">
<h1>情况三：watch监视的[reative]定义的[对象类型]数据</h1>
 <h2> Name:{{ person.name }}</h2>
 <h2 >Age: {{ person.age }}</h2>
    <button @click="ChangeName">eidt Name</button>
    <button @click="ChangeAge">eidt Age</button>
    <button @click="ChangePerson">eidt Person</button>
   </div>
    </template>
    <script lang="ts" setup name="Person" >
import {reactive,watch} from 'vue'

//数据
let person=reactive({
    name:'张山',
    age :18
})

//方法
function ChangeName(){
person.name+='$'
}

function ChangeAge(){
    person.age+=1
}

function ChangePerson(){
    // person={name:'Mark',age:19 }和person=reative({name:'Mark',age:19 })实际是变量指向了一个新的对象，而不是修改原来的响应式对象
    Object.assign(person,{name:'lisi',age:99})//相当于批量覆盖旧值
}

//监视

watch(person,(newVule,oldVaule)=>{
    console.log('peson变化了',newVule,oldVaule)
} )
     </script>
    <style>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: auto;
    }
    </style>