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


// type Employee={
//     id:number,
//     name:string,
//     department:string
// }

// type Manager={
//     id:number,
//     name:string,
//     employess:Employee[]
// }
// type Staff=Employee | Manager

// function printStaffDetails(staff:Staff):string{


//     if('employess' in staff){
//         return `${staff.name} is manager and he has ${staff.employess.length} employe `
//     }else{
//         return `${staff.name} is an employee department of ${staff.department} `
//     }

// }


// let jhon:Employee={
//     name:'jhon doe',
//     id:32,
//     department:'backedn developer'
// }

// let pop:Manager={
//     id:32,
//     name:'olli pop',
//     employess:[jhon]
// }


// const result = printStaffDetails(pop)
// console.log(result)

// intersection in typescript----
// intersection operator (&)

// ex--

// type Book={name:string,price:number,genre:string}

// const book1:Book={
//     name:'a girl in room 105',
//     price:20,
//     genre:'romance'
// }
// const book2:Book={
//     name:'min reading',
//     price:20,
//     genre:'physclogy'
// }

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
// type Discounted=Book & {discount:number}
// const discountedBook:Discounted ={
//     name:'min reading',
//     price:20,
//     genre:'physclogy',
//     discount:0.12
// }

// dynimically or computed use ----

// const propName='age'

// type User={
//     [propName]:number
// }

// let Jhon={[propName]:'jhon doe'}

// interfaces---------------------------------------------------------------------------------------------------------------------

// interface Person {
//     name:string,
//     age:number
// }

// const person1:Person={
//     name:"jhon",
//     age:20
// }

// console.log(person1.name)

// this is basic syntax of interface, remember one thing interfaces and type aliases are same except interfaces only work on object types

// now see how extend key word use in interface----

// interface Person {
//     name:string,
//     age:number,
// }

// interface Employe{
//     department:string
// }
// now we know this Employe has also have name and age so instead this property write better approach is we we extedn those value form Person interface
// interface Employe extends Person{
//     department:string
// }

// const employe:Employe={
//     name:"jhimi",
//     age:29,
//     department:'web developer'
// }

// console.log(employe.name)


// now we see nested extend-----------


// interface Person {
//     name:string,
//     age:number,
// }

// interface Employe extends Person{
//     salary:number
// }

// interface Manager extends Employe{
//         employees:Employe[]
// }

// const employe:Employe ={
//     name:"jhon",
//     age:45,
//     salary:60000
// }

// // console.log(employe.salary)
// const manager:Manager={
//     name:"pop",
//     age:67,
//     salary:200000,
//     employees:[employe]
// }
// console.log(manager.employees[0].name)


// type CheckStaff=Manager | Employe

// function addSalary(staff:CheckStaff):string{

//     if('employees' in staff){
//         staff.salary=300000
//     }else{
//         staff.salary=70000
//     }

//     return `${staff.name} congrats salary incremented succesffuly!  `
// }

// let incrementedPerson= addSalary(manager)
// console.log(incrementedPerson)
// console.log(manager.salary)


// function addEmployeeOrSeeEmployees(staff:CheckStaff){

//     if('employees' in staff){
//              return  manager.employees.map((em)=>(em))
//             }else{
//                return  manager.employees.push(staff)
//             }

// }

// const result=addEmployeeOrSeeEmployees(employe)
// console.log(result)

// now we see how to add method 

// interface Person {
//     name:string,
//     age:number,
//     greet:()=>void
// }

// interface Employe extends Person{
//     salary:number,
//     getSalary:(msg:string)=>string;
// }

// interface Manager extends Employe{
//         employees:Employe[]
// }

// const employe:Employe ={
//     name:"jhon",
//     age:45,
//     salary:60000,
//     greet(){
//         console.log(`hii ${this.name}`)
//     },
//     getSalary:(message:string)=>{
//         return `${message} ${employe.salary}`
//     }
   
// }

// console.log(employe.salary)
// const manager:Manager={
//     name:"pop",
//     age:67,
//     salary:200000,
//     employees:[employe],
//     greet:function(){
//         console.log(`hello ${this.name}`)
//     },
//      getSalary(message:string){
//         return `${this.name} ${message} ${this.salary}`
//     }
// }

// manager.greet()
// employe.greet()
// console.log(manager.getSalary('your salary is'))
// console.log(employe.getSalary('your salary is'))

// task ----------------------------------------------------

// interface Computer{
//   readonly  id:number,
//     brand:string,
//     storage?:string,
//     ram:number,
//     upgardeRam:(input:number)=>number
// }

// const dell:Computer={
//     id:23,
//     brand:"dell",
//     ram:4,
//     upgardeRam(ram:number){
//         return  ram+4
//     }
// }

// // console.log(dell.ram)
// console.log(dell.upgardeRam(4))


interface Person{
    name:string
}
interface DogOwner extends Person{
    dogName:string
}

interface Manager extends Person{
managePeople:()=>void,
delegentTask:()=>void
}

const person:Person={
    name:"jhon"
}
const dogOwner:DogOwner={
    name:"jhone",
    dogName:"petty"
}
const manager:Manager={
    name:"pop",
    managePeople(){
        console.log('managing people.....')
    },
    delegentTask(){
        console.log('task is working mode.....')
    }
}



// function getEmployee():Person{
//     let randomNumber = Math.random() * 1;
// let fixedNum = randomNumber.toFixed(2); // fixedNum is a string
// let fixedNumAsNumber = parseFloat(fixedNum); // convert to number

// if (fixedNumAsNumber < 0.33) {
//     return person; // Assuming person is defined somewhere in your code
// }else if(fixedNumAsNumber <0.66){
//     return dogOwner
// }else{
//    return manager
// }

// }

// console.log(getEmployee())