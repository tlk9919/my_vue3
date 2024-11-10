import { defineStore } from "pinia";
import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';

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
    actions:{
       async getAllTalk(){
                //发请求await：这个关键字会暂停函数的执行，直到 axios.get() 返回的 promise 完成
    // 也就是说，等到 API 请求完成并返回结果后，result 变量会存储请求的响应结果。
let result= await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//把请求回来的字符串，包装成一个对象
let obj={id:nanoid(),title:result.data.content}

console.log('obj',obj)
// console.log(result.data.content)
//放到数组中
this.talkList.unshift(obj)
        }
    },
    state(){
        return {
          talkList: JSON.parse(localStorage.getItem('talkList') as string ) || []//将 JavaScript 对象转换为 JSON 字符串
                }
    }
}
  
)