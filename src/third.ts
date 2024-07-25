// type aliases----------------------------------------

// first we se how to we work without type aliases----

// let jhon: { name: string; city: string; age: number } = {
//   name: "jhon",
//   city: "tokyo",
//   age: 40,
// };
// let suss: { name: string; city: string; age: number } = {
//   name: "suss",
//   city: "washington",
//   age: 23,
// };
// let simon: { name: string; city: string; age: number } = {
//   name: "simon",
//   city: "haowrd",
//   age: 17,
// };

// create a function ,that function takes a user as a paramter and chek if user age gretaer than 20 who can vote otherwise return you are not eligible

// function checkUserEligility(user:{ name: string; city: string; age: number }):string{
//     if(user.age>20){
//         return `${user.name} you can vote easily`
//     }else{
//         return `${user.name} you are not eligible for vote yet!`
//     }

// }

// const resultAfterChecking=checkUserEligility(simon)
// console.log(resultAfterChecking)

// here we can see how many repeat { name: string; city: string; age: number } thi code for type ,now we use type aliases for reduce code and create only once user type


// type User={
//     name:string,
//     city:string,
//     age:number
// }




// you can also create a seprate user property value type like this------


// let jhon: User = {
//     name: "jhon",
//     city: "tokyo",
//     age: 40,
//   };
//   let suss: User = {
//     name: "suss",
//     city: "washington",
//     age: 23,
//   };
//   let simon: User = {
//     name: "simon",
//     city: "haowrd",
//     age: 17,
//   };

  
// function checkUserEligility(user:User):string{
//     if(user.age>20){
//         return `${user.name} you can vote easily`
//     }else{
//         return `${user.name} you are not eligible for vote yet!`
//     }

// }

// const resultAfterChecking=checkUserEligility(simon)
// console.log(resultAfterChecking)


// here we create user one by one let create by constructor---


// type Name=string;
// type City=string;
// type Age=number;


// type User={
//     name:Name,
//     city:City,
//     age:Age
// }

// class Person{
//  name:Name
//  city:City
//  age:Age

//     constructor(user:User){
//         this.name=user.name;
//         this.city=user.city
//         this.age=user.age
//     }

//     sayHii(namee:string):string{
//         return `Hii ${namee} how are you`
//     }
// }

// const person1=new Person({name:'jhon',city:'london',age:24})
// console.log(person1)
// console.log(person1.sayHii(person1.name))

// TIME to perform a task-------


type Employee={
    id:number,
    name:string,
    department:string
}

type Manager={
    id:number,
    name:string,
    employess:Employee[]
}
type Staff=Employee | Manager

function printStaffDetails(staff:Staff):string{


    if('employess' in staff){
        return `${staff.name} is manager and he has ${staff.employess.length} employe `
    }else{
        return `${staff.name} is an employee department of ${staff.department} `
    }

}


let jhon:Employee={
    name:'jhon doe',
    id:32,
    department:'backedn developer'
}

let pop:Manager={
    id:32,
    name:'olli pop',
    employess:[jhon]
}


const result = printStaffDetails(pop)
// console.log(result)

// intersection in typescript----
// intersection operator (&)

// ex--

type Book={name:string,price:number,genre:string}

const book1:Book={
    name:'a girl in room 105',
    price:20,
    genre:'romance'
}
const book2:Book={
    name:'min reading',
    price:20,
    genre:'physclogy'
}

// now we add one more property in book is discount how could we do--

// const discountedBook:Book={
//     name:'min reading',
//     price:20,
//     genre:'physclogy',
//     discount:0.12
// }

// here we can see  typescript not allow to add new property but we have to add here is how can we do that that method is intersection(&)

// const discountedBook:Book & {discount:number} ={
//     name:'min reading',
//     price:20,
//     genre:'physclogy',
//     discount:0.12
// }

// & {discount:number} to add this line we can easily add new property this is called intersection means what we have type Book that keep same and add new property discount---


// one more way to do this--

// type Discounted={discount:number}

// const discountedBook:Book & Discounted ={
//     name:'min reading',
//     price:20,
//     genre:'physclogy',
//     discount:0.12
// }

// one more way to do this--
type Discounted=Book & {discount:number}
const discountedBook:Discounted ={
    name:'min reading',
    price:20,
    genre:'physclogy',
    discount:0.12
}

// dynimically or computed use ----

const propName='age'

type User={
    [propName]:number
}

let Jhon={[propName]:'jhon doe'}