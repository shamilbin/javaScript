//          sirs code



// Spread Operator (...)
// Used to spread elements of an array or object.

// ✅ Use Cases:
// Copying arrays/objects

// Merging arrays/objects

// let num1 = [1, 2, 3]
// let num2 = [...num1, 4, 5, 6]
// console.log(num2)


// let user = {
//     fname: "Suhail",
//     age: 25
// }

// let updatingUser = {
//     ...user,
//     city: "Hyd"
// }

// console.log(updatingUser)


// let arr1 = ["Hello", "I am", "Suhail", true, 10];
// // just printing without in array syntax
// console.log(...arr1, typeof arr1)

// let person = {
//     ...updatingUser
// }

// console.log(person)

// Rest Operator (...)
// if you are using spread operator in a function parameter then its called as
// rest operator 

// function sum(...nums) {
//     return nums.reduce((start, curr) => {
//         return start + curr
//     }, 0)
// }

// let myArr = [2, 3, 5, 6, 7, 8, 9, 10]
// let final = sum(myArr)
// console.log(final)

// let nums = [1, 2, 3]

// let allNums = nums.reduce((start, current) => start + current)

// // console.log(allNums)

// Default Parameters in Functions

// function sayHello(age = 20, myName = "Guest",) {
//     console.log(`Hello My Name is ${myName} and age is ${age}`)
// }

// // this your form 
// sayHello(25,)


function multiply(a = 0, b = 0) {
    return a * b
}

let answer = multiply();
console.log(answer)







//          shamils code


let num1 = [1, 2, 3];
let num2 =[...num1,3,5,6]
// console.log(num2)


let arr=["Shamil","Ishwari"]
let arr2=[...arr,"Azhar","Suhail",true,34]

// console.log(arr)
// console.log(arr2)
// console.log(...arr2)
// console.log(...arr)




function sayHello(name="Shamil",age=20){
    console.log(`Hello My Name is ${name} and my age is ${age}`)
}


sayHello("Azhar",27)
sayHello()







/*
                    Task 
                    1.Sheet of All Array Methods and String Methods
                    2.Practice Each Array and String Method 5 Times
                    3.Create a new private repo name jsMethods 
                      add suhail as a collab
                    folder setup
                    i need 2 folders // arrays and string 
                    in arrays i need all array methods with fileName
                    push.js pop.js shift.js 
                    and same for string in string folder
*/