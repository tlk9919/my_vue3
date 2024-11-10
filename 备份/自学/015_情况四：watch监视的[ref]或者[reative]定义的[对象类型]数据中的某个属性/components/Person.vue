<template>
   <div class="person">
<h1>情况三：watch监视的[reative]定义的[对象类型]数据</h1>
<h2>姓名:{{ person.name }}</h2>
<h2>年龄:{{ person.age }}</h2>
<h2>汽车:{{ person.ca.c1 }}、{{ person.ca.c2 }}</h2>
<button @click="changeName">修改姓名</button>
<button @click="changeAge">修改年龄</button>
<button @click="changeFirst">修改第一辆车</button>
<button @click="changeSecond">修改第二辆车</button> 
<button @click="changeCar">修改汽车</button>
   </div>
    </template>
    <script lang="ts" setup name="Person" >
import {reactive,watch} from 'vue'

//数据
let person= reactive({
    name:'Bob',
    age:20,
    ca:{
        c1:'Xiaomi_Su7',
        c2:'BMW'
    }
})
//方法
function  changeName(){
    person.name+='_'
}
function  changeAge(){
person.age+=1
}
function  changeFirst(){
person.ca.c1='奥迪'
}
function  changeSecond(){
person.ca.c2='法拉利'
} 
function  changeCar  
 (){person.ca={
    c1:'本田',
    c2:'大众'
 }

}
//监视 情况四：监视响应式对象某个属性，且该属性是基本数据类型，要写成函数式
//watch(()=>person.name,(newVule,oldVaule)=>与下面相同
// watch(()=>{return person.name},(newVule,oldVaule)=>{
//     console.log('peson.name变化了',newVule,oldVaule)
// })

//监视 情况四：监视响应式对象某个属性，且该属性是对象数据类型，可以直接写，也可以写成函数式，更推荐写函数式
//结论：监视是对象的属性，那么最好写函数式，注意：如果是对象监视的地址值，需要监视内部，需要手动开启深度监视
watch(()=>person.ca,(newVule,oldVaule)=>{ console.log('peson.car变化了',newVule,oldVaule)},{deep:true})
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