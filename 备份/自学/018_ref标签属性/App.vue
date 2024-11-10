<template>
    <h2 ref="title2">hello</h2>
    <button @click="ShowLog">test</button>
<Person ref="ren"/>
</template>
<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import{ref} from 'vue'
    //创建有一个title,用于存储ref标记的内容
    let title2 =ref()
    let ren=ref()
//方法
function ShowLog(){
    console.log(ren.value)
}

</script>

<style>
/* .app{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: auto;
} */
</style>