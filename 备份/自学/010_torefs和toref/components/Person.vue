<template>
   <div class="person">
    <h2>Name:{{ person.name }}</h2>
    <h2>Age:{{ person.age }}</h2>
    <button @click= "ChangeName">eidtName</button>
    <button @click= "ChangeAge">eidtAge</button> 
   </div>
    </template>
    <script lang="ts" setup name="Person" >
    import { reactive,  toRefs } from 'vue'
    
    //数据
let person =reactive({
    name:'李艾',
    age:19
})
// 解构let {name,age}=person 等价于了 let name=person.name  let age=person.age
let {name,age}= toRefs(person)  
let x=person
    console.log(x)
    //方法
function ChangeName(){
name.value +='_'
console.log(name)
}
function ChangeAge(){
 age.value+=1
console.log(age)
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