<template>
 <Person v-if="isShow"/>
</template>
<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import {ref,onMounted} from 'vue'

let isShow=ref(true);
onMounted(()=>{
    console.log('父————————挂载完毕');
})


</script>

<style>
/* .app{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: auto;
} */
</style>