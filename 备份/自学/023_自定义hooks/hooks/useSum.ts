
import { onMounted, ref ,computed  }  from 'vue' 

//data
 export  default function  (){
    let sum =ref(0);

    let BigSum=computed(()=>{
        return sum.value *10
    })
    //methods
    
    function ChangeSum(){
    sum.value+=1;
    }
    //钩子
    onMounted(()=>{
        ChangeSum()
    })
    //向外部提供东西
    return {sum ,ChangeSum,BigSum}
}
