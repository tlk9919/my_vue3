
import { onMounted, reactive }  from 'vue' 
import axios from 'axios';
//data
 export default function   (){
    
    let DogList=reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg '
    ])
    console.log(typeof DogList[0]); // 输出 "string"
    
    //methods
    
    async function GetDog(){
    try {
        let result=await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    console.log(result.data.message)
    DogList.push(result.data.message)
        
    } catch (error) {
        alert(error)
    }
    }
    //钩子
    onMounted(()=>{
        GetDog();
    })
    //向外部提供东西
    return {DogList,GetDog}
}
