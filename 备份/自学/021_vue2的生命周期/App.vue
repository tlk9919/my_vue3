<template>
  <Person v-show="isShow"/>
  <!-- v-show 结构还在 v-if 删除结构 -->
</template>

<script>
import Person from './components/Person.vue'

export default {
  name: 'App',
  components: {Person },
  data(){
    return{
      isShow:false
    }
  }
}
</script>


