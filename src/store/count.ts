import { defineStore } from "pinia";


// defineStore(id, {
//     state: () => ({
//       // 存储状态
//     }),
//     getters: {
//       // 计算属性或派生状态
//     },
//     actions: {
//       // 可以直接修改状态的同步或异步方法
//     },
//   })
export const useCountStore=defineStore('cout',{
    actions:{//actions里面放置的是一个一个方法，用于响应式组件中的“动作”
        increment(value:number ){
            console.log('increment被调用了',value)
            //修改数据(this是当前的store,this是pinia实例，不是vue实例)
            // console.log('sum',this.sum)
            this.sum+=value

        }
    },
    state(){
        return {
            sum:6,
            school:'sgg',
            address:'bejing'
                }
    },

    getters:{
        // bigSum(state){
        //     return state.sum *10
        // },
        bigSum :(state)=>state.sum *10,
        // bigSum :state=>{
        //     return state.sum *10
        // }
        upperSchool(state  ){
            return state.school.toUpperCase()
        }
    },
}
  
)