<template>
    <h2 a='1+1'  :b='1+1' c='x' :d='x' ref='qwe'> </h2>
<Person  a="haha" :List="personList" />
</template>
<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import { reactive } from 'vue';
import { type Persons } from './types';

let x=9
/* let personList :Persons= reactive ([
    { id:'qwe01',name:'张三',age:17},
    { id:'qwe02',name:'张三',age:18},
    { id:'qwe03',name:'张三',age:19}
]) */
//等价传泛型
let personList = reactive<Persons> ([
    { id:'qwe01',name:'张三',age:17},
    { id:'qwe02',name:'张四',age:18},
    { id:'qwe03',name:'张五',age:19}
])
</script>

<style>
/* .app{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: auto;
} */
</style>