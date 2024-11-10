<template>
    <div class="person"><h1>nihao</h1>
    <h2>姓名：{{ name }}</h2> 
    <h2>年龄：{{age }}</h2>
    <!-- <h2>电话：{{ tel }}</h2> -->
    <button @click="showTel">show</button>
    <button @click="ChangeAge">修改年龄</button>
</div>
    
    </template>
    
    <script lang="ts">
    export default{
        name:'Person',
        // data(){
        //     return{
        //         name:'zs',
        //         age:18,
        //         tel:'1388888888'


        //     }
        // },methods:{
        //     showTel(){
        //         alert(this.tel)
        //     }
        // }
        setup (){
            //data
            let name='zs'//此时不是响应式
             let age=18//此时不是响应式
             //methods
             function showTel() {
            //  alert(this.tel)this是未定义的
            alert(age)
             }
             function ChangeAge(){
               age+=1
                console.log(age)
             }
             return {name,age,showTel,ChangeAge}
           
        }
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