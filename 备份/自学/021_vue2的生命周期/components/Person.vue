<template>
    <div class="person">
        <h2> now sum:{{ sum }}</h2>
        <button @click="ChangeSum">conclik Sum+1</button>
    </div>

</template>

<script>




export default {
    /* eslint-disable */
  name: 'Person',
//data  
  data(){
    return {
        sum:1
    }
  },
  //methods
  methods:{
    ChangeSum(){ this.sum+=1}
  }, 
  //创建前的钩子
  beforeCreate(){
    console.log('创建前')
  },
//创建后的钩子
created(){
    console.log('创建完毕')
},
//挂载前
beforeMount(){
    console.log('挂载前')
},
//挂载完毕
mounted(){
    console.log('挂载完毕')
},
//更新前
beforeUpdate(){ console.log('更新前') },
//更新完毕
updated(){ console.log('更新完毕') },

//销毁前
beforeDestory(){
    console.log('销毁前')
},
//销毁后
destroyed(){
    console.log('销毁完毕')
}

}
</script>
<style scoped>
.person{
    background-color: aqua;
    padding: 20px;
    border-radius: 10px;
    box-shadow:  0 0 10px;
}
</style>
