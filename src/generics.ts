

// const array1:number[]=[1,2,3,4,5,6]
// const array2:string[]=['one','two','three','four','five','six']
// const array3:boolean[]=[true,false,false,true,true,false]


// //now we create this with generics---

// function craeteArray<T>(...args:T[]):T[]{
//     return args
// }



// let numberArray=craeteArray<number>(1,2,3,4,5,6,6)
// // console.log(numberArray)
// let stringArray=craeteArray<string>('apple','mango','tomato')
// console.log(stringArray)


// generics function with default types----
// function createArray<T = string>(length: number, value: T): T[] {
//     return Array(length).fill(value);
// }


// function getNumber(arge:number):number{
//     return arge
// }

// console.log(getNumber(8))

// function getString(arge:string):string{
//     return arge
// }

// console.log(getString('hello').toLocaleUpperCase())


// function getAnyValue(arge:any):any{
//     return arge
// }

// console.log(getAnyValue('hello'))


// with generics------------------------


// function getAnyValue<T>(arg:T):T{
//     return arg
// }

// console.log(getAnyValue('hello'))
// console.log(getAnyValue(10))
// console.log(getAnyValue<number>(10))


// let stringArray = createArray(3, "hello"); // ["hello", "hello", "hello"]
// let numberArray = createArray(3, 42); // [42, 42, 42]
// console.log(numberArray)


// generics function with array--------------


// function printArray<T>(arg:T):T{
//     return arg
// }

// console.log(printArray([1,2,3,4,56,8]))

// function printArray<T>(arg:T[]):T[]{
//     return arg
// }

// console.log(printArray<number>([1,2,3,4,56,8]))

function printArray<T>(arg:T[]):T{
    return arg[0]
}

// console.log(printArray([1,2,3,4,56,8]))
// console.log(printArray(['hello','hiii']))


// generics function with multiple type parameter--------


// function pair<T,U>(first:T,second:U):[T,U]{
//     return [first,second]
// }

// console.log(pair('hello',45))


// generics function with constraints----

// interface Person{
//     name:string
// }


// function getName<T extends Person>(arg:T){
//     console.log(`hii ${arg.name}`)
// }


// getName({name:'peter'})


// interface Person<T,U>{
// name:T;
// age:U
// }

// const person:Person<string,number>={
//     name:'farhan',
//     age:20
// }

// console.log(person.name)
// console.log(person.age)

// function getInfo<T extends Person<string,number> >(info:T){
//     console.log(`hii ${info.name} and your age is ${info.age}`)
// }


// interface Person{
//     name:string,
//     age:number
// }

// function getInfo<T extends Person>(info:T){
// console.log(`hii ${info.name} your age is ${info.age}`)
// }
// function getInfo<T extends Person>(info:T):T {
//     // console.log(`hii ${info.name} your age is ${info.age}`)
//     return info
//     } 


//  const result=getInfo({name:'peter parkker',age:45})
//  if(result.age>24){
//     console.log('hey you are eligible for anything')
//  }else{
//     console.log('you are not eligible');
    
//  }


// generics in classes-------

class Person<T,U>{
    name:T
    age:U
    constructor(name:T,age:U){
        this.name=name
        this.age=age
    }

    getInfo(){
        return `he is ${this.name} and his age is ${this.age}`
    }

   setName(name:T){
    this.name=name
   }
    sayHii<T>(arg:T):void{
    console.log(`hiii ${arg}`)
    }
}

const person=new Person<string,number>('peter',25)
// console.log(person)
// console.log(person.name)

// console.log(person.getInfo())
// console.log(person.sayHii('peter'))
person.setName('poll')
console.log(person)
