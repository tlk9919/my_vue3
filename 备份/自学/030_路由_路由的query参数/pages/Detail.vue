<template>
    
    <ul class="news-list">
        <li>编号：{{ query.id }}</li>
        <li>标题：{{ query.title }}</li>
        <li>内容：{{ query.content}}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
import { useRoute } from 'vue-router';
import { toRefs } from 'vue';
let route=useRoute()
//解构,看备份010
// let {query}=route  let route.query=query 失去了响应式
let {query}=toRefs (route)
console.log('@@@',route)
</script>

<style scoped>

</style>
