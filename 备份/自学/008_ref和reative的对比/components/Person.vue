<template>
   <div class="person">
    <h2>车辆信息：一辆{{ car.brand }}车的{{ car.price }}万</h2>
    <br>
   <h2>当前求和{{ sum }}</h2>
    <button @click="ChangePrice">汽车涨价</button>
    <button @click="ChangeCarName">汽车改brand</button>
    <button @click="ChangeCar">修改汽车</button>
    <button @click="CaluSum">单击我加1</button>
   </div>
    </template>
    <script lang="ts" setup name="Person" >
    import { reactive, ref } from 'vue';
    //数据
    let car =reactive({brand:'奔驰',price:100})
    let sum=ref(0)
    //方法
    function ChangePrice(){
        car.price += 10
    }
 function CaluSum(){
    sum.value+=1
 }
function ChangeCarName (){
car.brand='宝马'
}
function ChangeCar(){
    // car = {brand:'奥托', price:1} 不更新
      // car = reactive({brand:'奥托', price:1})  不更新
    Object.assign(car,{brand:'奥托', price:1})

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