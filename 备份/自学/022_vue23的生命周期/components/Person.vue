<template>
   <div class="person">
    <h2>当前求和：{{sum  }}</h2>
    <button @click="ChangeSum">点击我sum加一</button>
   </div>
    </template>
    <script lang="ts" setup name="Person" >

    import { ref ,onBeforeMount, onMounted, onUpdated, onBeforeUpdate, onUnmounted }  from 'vue' 
//data

let sum =ref(0);

//methods

function ChangeSum(){
    sum.value+=1;
}

//创建 vue2中 beforeCreate  created

console.log('创建');

//挂载前，vue3帮我们挂载onBeforeMount所指定的函数(箭头函数)
onBeforeMount(()=>{
    console.log('挂载前');
})

//挂载完毕
onMounted(()=>{
    console.log('子————————挂载完毕');
})

//更新前
onBeforeUpdate(()=>{
    console.log('更新前');
})

//更新完毕
onUpdated(()=>{
    console.log('更新完毕');
})

//卸载前
onUnmounted(()=>{
    console.log('卸载前');
})

//卸载完毕
onUnmounted(()=>{
    console.log('卸载完毕');
})
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