<template>
   <div class="person">
<ul>
    <li v-for=" item in List" :key="item.id"> {{ item.name }}--{{ item.age }}</li>
</ul>

   </div>
    </template>
    <script lang="ts" setup name="Person" >
    import { type Persons } from '@/types';
    import { withDefaults,}  from 'vue' 
    //接受List
    // defineProps (['List'])

/* let x=defineProps(['a'])
let y=defineProps(['List']) 报错*/



//接受List  + 限制类型
// defineProps<{List: Persons}>()    List是要规范于Persons的


//接受List  + 限制类型  + 限制必要性
// defineProps<{List?: Persons}>()

//只接受List，并且将props保存起来
// let x=defineProps(['List'])
  

////接受List  + 限制类型  + 限制必要性 +指定默认值

withDefaults(defineProps<{List?: Persons}>(),{   
    // List: [{ id:'quwdi001',name:'编辑',age:19}]报红
    List: ()=>[{ id:'quwdi001',name:'编辑',age:19}]//要返回一个值才行
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