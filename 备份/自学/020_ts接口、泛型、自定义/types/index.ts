//定义一个接口，用于限制Person对象的具体属性
 export interface PerosnInter{
    id:string
    name:string
    age:number
}
export const a =9
//定义一个自定义类型
export type Persons =Array<PerosnInter>