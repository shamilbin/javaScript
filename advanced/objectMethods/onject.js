// Object Methods

// 1. keys() Method

let person = {
    fname: "Suhail",
    age: 22,
    isAlive: true
}
// To add
// console.log(person)
person.city = "Hyd"
// console.log(person)
// To Update

person.city = "Mumbai"
// console.log(person)


// To delete

delete person.city
// console.log(person)


// Object.keys takes all keys and converts into an array

let person1 = {
    fname: "Suhail",
    age: 22,
    isAlive: true
}

let allKeys = Object.keys(person1);
// console.log(allKeys)
// // console.log(Object.keys(person1))
// // 2. Object.values
// console.log(Object.values(person1))


// 3.Object.fromEntries()
// This will convert an Array to Object

let arr = [["fname", "Shamil"], ["age", 22], ["isAlive", true]]

// let output = {
//     fname:'Shamil',
//     age:22,
//     isAlive:true
// }


// console.log(Object.fromEntries(arr))


// 4. Object.seal()
// Using Object.seal()
// if perform users to allow only update the value
// you cannot delete anything from object
// you cannot even add something
/// you can only

let person2 = {
    fname: "Suhail",
    age: 22,
    isAlive: true
}



// Object.seal(person2);

// console.log(person2)
// delete person2.fname

// person2.city = 'Dubai'


person2.age = 40

// console.log(person2)

// 5. isSealed() Method
// to check your object is sealed or not 
// console.log(Object.isSealed(person2))

// console.log(Object.isSealed(person1))


// 6. Object.freeze() Method

let person3 = {
    fname: "Suhail",
    age: 22,
    isAlive: true
}

Object.freeze(person3)

console.log(person3)

person3.city = "Hyd"
console.log(person3)

person3.age = 26;
console.log(person3)


delete person3.isAlive;
console.log(person3)



// 7. isFrozen() Method


console.log(Object.isFrozen(person1))
console.log(Object.isFrozen(person3))