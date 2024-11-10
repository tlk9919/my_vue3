<template>
    <div class="person"><h1>nihao</h1>
    <h2>姓名：{{ name }}</h2> 
    <h2>年龄：{{age }}</h2>
    <!-- <h2>电话：{{ tel }}</h2> -->
    <button @click="showTel">show</button>
    <button @click="ChangeAge">修改年龄</button>
</div>
    
    </template>npm 
    <script lang="ts" setup name="Person234" >
    import { ref } from 'vue';
     let name=ref('zs')
     let age=18 
     function showTel() {
            //  alert(this.tel)this是未定义的
            alert(age)
             }
             function ChangeAge(){5
               age+=1  //页面不变化
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