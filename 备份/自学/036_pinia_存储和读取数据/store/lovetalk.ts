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
export const useLoveTalkStore=defineStore('lovetalk',{
    state(){
        return {
            talkList:[
                { id: 'ftrfasdf01', title: '今天你有点怪，哪里怪？怪好看的！' },
                { id: 'ftrfasdf02', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
                { id: 'ftrfasdf03', title: '心里给你留了一块地，我的死心塌地' }
            ]
                }
    }
}
  
)