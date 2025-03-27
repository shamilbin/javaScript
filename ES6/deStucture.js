//                              sirs code


// Destructing Objects and Arrays 

let person = {
    fname: "Suhail",
    age: 22,
    isAlive: true,
    city: "Hyd",
    phone: "8934798374"
}


// let fname = person.fname
// console.log(fname)
 // let age = person.age
// let phone = person.phone
// let city = person.city

// Object Destructing


let { fname, age, phone, city, isAlive } = person
// let declare all variables 
// take variables of same key name
// from a object name called person

console.log(fname, age, phone, city, isAlive)


let arr = ["Suhail", "Shamil", "Ishwari", "Azhar"];

let [x, y, z] = arr;
console.log(x, y, z)


// Async JS ==> 1.30





//                  shamils code


// let person2 = {
//   fname: "Shamil",
//   mName: "Bin",
//   lName: "Abdussamad TK",
//   age: 23,
//   iaAlive: true,
//   city: "Kerala",
//   phone: "9645213232",
// };

// let { fname, mName, lName, age, iaAlive, city, phone } = person;

// console.log(fname, mName, lName, age, iaAlive, city, phone);

// let name = [`Shamil`, `Suhail`, `Ishwari`, `Azhar`];

// let [a, b, c, d] = name;
// console.log(a, b, c, d);
