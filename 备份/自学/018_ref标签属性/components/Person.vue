<template>
   <div class="person">
<h1>China</h1>
<!-- <h2 id="title2">BeiJing</h2> -->
<h2 ref="title2">BeiJing</h2>
<h3>ShangGuigu</h3>
<button @click="ShowLog">单击我输出h2</button>
   </div>
    </template>
    <script lang="ts" setup name="Person" >
    import{ref ,defineExpose} from 'vue'
    //创建有一个title,用于存储ref标记的内容
    let title2 =ref()
    let a=ref(0)
    let b=ref(1)
    let c=ref(2)
//方法
function ShowLog(){
    console.log(title2.value)
}
defineExpose({a,b,c})
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