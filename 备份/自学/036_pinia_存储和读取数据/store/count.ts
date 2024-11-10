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
    state(){
        return {
            sum:6
                }
    }
}
  
)