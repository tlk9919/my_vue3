<template>
   <div class="person">
    <h2>当前求和：{{sum  }}   放大：{{ BigSum }}</h2>
    <button @click="ChangeSum">点击我sum加一</button>
    <br>
    <button @click="GetDog">点击我换狗图片</button>
    <hr>
    <img  v-for="(dog,index) in DogList"  :key="index"  :src="dog">
   </div>
    </template>
    <script lang="ts" setup name="Person" >

    import useDog from '@/hooks/useDog';
    import useSum from '@/hooks/useSum';

    //解构
    const {sum ,ChangeSum,BigSum}=useSum()
    const{DogList,GetDog}=useDog()
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
    img{
        height: 100px;
        margin-right: 20px;
    }
    </style>