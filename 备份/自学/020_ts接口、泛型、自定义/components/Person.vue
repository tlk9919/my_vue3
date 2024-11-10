<template>
   <div class="person">

   </div>
    </template>
    <script lang="ts" setup name="Person" >
    // import {a,PerosnInter} from '@/types' a不报红，PerosnInter报红，因为PerosnInter是一个类型
    import {type PerosnInter,type Persons} from ./types' 

let person :PerosnInter={id:'tlk001',name:'Mark',age:18}

// let personList:PerosnInter= [
// {id:'tlk001',name:'Mark',age:128},
// {id:'tlk002',name:'M2rk',age:18},
// {id:'tlk003',name:'Marfjk',age:118}
// ]
// //报错
// let personList:Array<PerosnInter>= [
// {id:'tlk001',name:'Mark',age:128},
// {id:'tlk002',name:'M2rk',age:18},
// {id:'tlk003',name:'Marfjk',age:118}
// ]
//不报错且数组泛型
let personList:Persons= [
    {id:'tlk001',name:'Mark',age:128},
    {id:'tlk002',name:'M2rk',age:18},
    {id:'tlk003',name:'Marfjk',age:118}
 ]

</script>
    <style scoped>
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