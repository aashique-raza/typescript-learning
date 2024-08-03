

// let value:never=98 typescript will complain you can not set any value of type never



// type Theme='Dark' | 'Light'

// function checkTheme(theme:Theme){

//     if(theme==='Dark'){
//         return `${theme} theme`
//     }
//     // theme typescript know here theme will be only light

//     if(theme==='Light'){
//         return `${theme} theme`
//     }

//     // theme here typescript will tell you theme type is neve caus you handle all posibility

// }

// console.log(checkTheme('Dark'))


// typescript module------

//  const value :string='farhan'
//  you use same  varibale diffrent file by default typescript consider as global variable not scoped so it will give error
// you can solve by two ways one is export or import and second is "moduleDetection": "force", in ts configue


// import getName,{sayHello,type Student,newStuden} from "./action"

// const oneMOreStudent:Student={
//     name:'pop',
//     age:24
// }

// console.log(getName('waseem'))
// sayHello('how are you')
// console.log(newStuden)

// this is how works import export in type script you also import export type ----

// here we importinj js file in typescript---
// import value from './file.js'  it will complain that typescript does not know about it
// but when we do some configuration ("allowJs": true) in our ts configue file we will see how it work--
// import {value} from './file.js'


// type Dog={
//     type:'dog',
//     name:string,
//     bark:()=>void
// }

// type Cat={
//     type:'cat',
//     name:string,
//     meow:()=>void
// }

// type Animal=Dog | Cat

// const cat:Cat={
//     type:'cat',
//     name:'pissy',
//     meow(){
//         console.log('meoww')
//     }
// }
// const dog:Dog={
//     type:'dog',
//     name:'pissy',
//     bark(){
//         console.log('barking')
//     }
// }


// function makeSOund(animal:Animal){

//     if(animal.type==='cat'){
//         animal.meow()
//     }else{
//         animal.bark()
//     }

// }

// makeSOund(cat)
// makeSOund({
//     type:'cat',
//     name:'tiyal',
//     meow(){
//         console.log('meow kr rha hai')
//     }
// })

