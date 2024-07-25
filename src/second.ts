// object and functions____________________________________________________________________________________________________________


let car={brand:'toyota',year:2000}

let bike:{brand:string,year:number}={brand:'tvs',year:2014}

// first is implicitly type and second is explicit type,

// ex-------

// car.color='red'
// bike.color='yelow'

// car.brand=222

// let product1={category:'laptop',price:5000,year:2013}
// let product2={category:'mobile',price:2000,year:2014}
// let product3={category:'watch',year:2018}
// let product4={category:'ipad',price:1000,}

// let products:readonly { category:string;price?:number;year?:number}[]=[product1,product2,product3,product4]



// console.log(products)


// function sayHi(name:string){
//     console.log(`hii welcome ${name.toLocaleUpperCase()}`)
// }

// sayHi('farhan')



// function any type------

// function greet(name:any){
//     console.log(`hiii ${name}`)
// }

// greet(2)
// greet('farhan')


// function add(num1:number,num2:number):number | string {
//     // console.log(num1+num2)

//     if(num1>num2){
//  return 'hii'
//     }
   
//     return num1+num2
// }

// console.log(add(2,3))


// function test():never{
// throw 'hiii this is never type'
// }
// console.log(test())

// const names:string[]=['jhon','alexa','captain','fox','belly'];

// function findByName(name:string,arr:string[]){

//     for(let n of arr){
//         console.log('names are ',n)
//         if(n===name){
//             return true
//         }
//     }
// }


// console.log(findByName('jhon',names))

// rest parameter-----------------------------


// function add(message:string,...numbers:number[]):string{

//     let doubled=numbers.map((num)=> num*2)
//     console.log(doubled)

//   let total:number=  numbers.reduce((previous,current)=>{
//         return previous+current
//     },0)

//     return `${message}${total}`
// }


// let result= add('total result is :',1,2,3,4,5,5,6,)
// console.log(result)



// function priceDiscountCount(price:number,discountAmount:number=0):number {
// return price-(discountAmount || 0)
// return price- discountAmount
// }


// let afterDiscount=priceDiscountCount(100,33)
// let withoutDiscount=priceDiscountCount(100)

// console.log(withoutDiscount)

// function inputProcess(value:number|string){
//     if(typeof value==='number'){
//         return value *2
//     }else{
//        return value.toUpperCase()
//     }
// }

// // const reuslt=inputProcess(2)
// const reuslt=inputProcess('farhan')
// console.log(reuslt)

// let students:{rollNo:number;name:string;class:string;fees:number}[]=[]

// function studentAdmission(student:{rollNo:number;name:string;class:string;fees:number}):string{

//     console.log(`hello ${student.name} welcome to our school`)
//     students.push(student)

//     return `hello ${student.name} your admission is successfully done join class from tomorrow!`
// }

// const newStudent={
//     rollNo:1,
//     name:'jhon',
//     class:'6th',
//     fees:800
// }

// const afterAdmission= studentAdmission(newStudent)
// console.log(afterAdmission.toUpperCase())
// console.log(students)


function processData(input:string | number,config:{reverse:boolean}={reverse:false}){

    if(typeof input ==='number' ){
        return input*input
    }
    else{
        return config.reverse? input.toUpperCase().split('').reverse().join(''):input
    }

}

// const result=processData(2,{"reverse":false})
const result=processData('hello',{reverse:true})

console.log(result)




