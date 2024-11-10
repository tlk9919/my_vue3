<template>
    
    <ul class="news-list">
        <li>编号{{id}}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">

defineProps(['id','title','content'])
// const route =useRoute();
// console.log(route)
//解构,看备份010
// let {query}=route  let route.query=query 失去了响应式
// let {query}=toRefs (route)
// console.log('@@@',route)
</script>

<style scoped>

</style>
