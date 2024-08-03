// enum Days{
//     sunday,
//     monday,
//     tuesday,
//     wednesday,
//     tharusday,
//     friday,
//     saturday,

// }

// console.log(Days.friday)

// reverse mapping-------
// console.log(Days[5])

// Days.friday='sda' this is throwing an error ---


// enum Directions{
//     North='North',
//     South='South',
//     West='West',
//     East="East"
// }

// console.log(Directions.North)
// console.log(Directions[0])

// console.log(Directions.North)
// console.log(Directions[0]) it is throwing an error-----

// enum ServerResponse{
//     Success=200,
//     Error=400,
//     Pending='Pending'
// }

// interface REsponseStatus{
//     data:string[],
//     result:ServerResponse
// }

// const getData=():REsponseStatus=>{

//     return {
//        result:ServerResponse.Success,
//        data:['item1','item2']
//     }
// }
// const getData=():REsponseStatus=>{

//     return {
//        result:200,
//        data:['item1','item2']
//     }
// }

// console.log(getData())

// tuples------------------------------------------------------------------------------------------

// let ourTuple:[number,string]=[3,'hello']

// // named tuple

// const graph:[x:number,y:number]=[60.4,49.5]

// try to order chnage ----

// const humen:[name:string,age:number,isActive:boolean]=['jhon',24,true]
// const humen:[name:string,age:number,isActive:boolean]=[24,true,'jhon'] it will throw an error 

// try to add new indexes over predifined indexs-----

// const fixedTuples:[number,string]=[87,'jhon']
// const fixedTuples:[number,string]=[87,'jhon',45] it will throw an error------

// destructuring tuples------

//  const person:[name:string,age:number,city:string]=['jhon doe',56,'london']

// let personName:string=person[0]
// console.log(personName)

// let personAge:number=person[1]
// console.log(personAge)


// type Hook={
//     name:string,
//     setName:()=>void
// }


// task----

// enum userRole{
//     Members,
//     Admin,
//     Manager,
//     Employee
// }



// type User={
//     id:number,
//     name:string,
//     role:userRole,
//     contact:[email:string,mobile:number]
// }

// const user1:User={
//     id:987,
//     name:'jhon',
//     role:userRole.Employee,
//     contact:['user1@gmail.com',8767878990]
// }

// function createUser(user:User):User{
// return user
// }


// console.log(createUser(user1))

// unkown type---

// let value:unknown

// value='hello'
// console.log(value.length)  it is complaining that it is type of unkonw

// if( typeof value==='string'){
//     console.log(value.length);
    
// }
// value=897.083929
// if(typeof value ==='number'){
//     console.log(value.toFixed());
    
// }

// let value:any
// value=2222
// console.log(value.toUpperCase());

// console.log(value.length) it is not complaining---

// try {
//     throw new Error('something went wrong...')
// } catch (error) {
//     // console.log(error.message)
//     console.log(error)
// }

// in typescript error bydefault is unkown type so you can not perfom any operation before type check