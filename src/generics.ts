

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

// let stringArray = createArray(3, "hello"); // ["hello", "hello", "hello"]
// let numberArray = createArray(3, 42); // [42, 42, 42]
// console.log(numberArray)



