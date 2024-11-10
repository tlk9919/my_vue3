<template>
   <div class="person">
    <h2>车辆信息：一辆{{ car.brand }}车的{{ car.price }}万</h2>
    <br>
    <h2> 游戏列表：</h2>
    <ul>
        <li v-for="g in games " :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="ChangePrice">涨价</button>
    <button @click="ChangeNameFirst">修改第一个游戏名字</button>
   </div>
    </template>
    <script lang="ts" setup name="Person" >
    import { reactive, ref } from 'vue';
    let car =ref({brand:'奔驰',price:100})
    let games=ref([
        {id:'game01',name:'王者'},
        {id:'game02',name:'和平'}])
        let obj=reactive({x:999})
    console.log(car)
    console.log(obj)
    function ChangePrice(){
        car.value.price += 10
    }
    function ChangeNameFirst(){
games.value[0].name='三国杀'
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