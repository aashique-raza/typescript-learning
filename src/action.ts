 const name:string='farhan'

export type Student={
    name:string;
    age:number
 }

export const newStuden:Student={
    name:'jhon',
    age:24
}


export function sayHello(mess:string){
    console.log(`hello ${mess}`)
}


export default function getName(name:string):string{
    return `hii ${name} you are too good`
}