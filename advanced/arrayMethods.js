//          sir code




// Array Methods

let arr0 = [1, 2, "Hi", "Hello", null, false];

// 1. at() Method 
// it takes indexs as parameter

// console.log(arr.at(2)) // Hi
// console.log(arr.at(3)) // Hello
// console.log(arr.at(1))
// console.log(arr[1])
// console.log(arr.at(1));


// 2. concat() Method


let arr1 = ["Suhail", "Shamil"];
let arr2 = ["Ishwari", "Test"];
// let arr3 = arr1.concat(arr2);
// console.log(arr3)


/// 3. fill() method

let arr4 = ["Hello", 1, 2, 3, "BYE"];
let arr5 = arr4.fill(10);
// console.log(arr5)


// 4. Flat() Method

let arr6 = [10, 20, [30, 40], [50, 60], [70, 80]];
// console.log(arr6)
let arr7 = arr6.flat();
// console.log(arr7)


// 5. includes method 

let arr8 = ["Shamil", "Ishwari", "Suhail"];
let arr9 = arr8.includes("Shamil");
// console.log(arr9)


// 6. indexOf Method

let arr10 = ["hi", 1, 3, false, null, "Shamil"]

// console.log(arr10.at(5)) // Shamil
// console.log(arr10.indexOf("Shamil")) // 5
// // lets suppose there is no matching element 
// // then it will print you value as -1
// console.log(arr10.indexOf("Suhail")) // -1


// 7. Array.isArray() Method;

// check the array is an array or not

let arr11 = {
    fname: 'Suhail',
    age: 24
}

let arr12 = ["Suhail", 24];

// console.log(Array.isArray(arr11))
// console.log(Array.isArray(arr12))

// 8. join() method


let arr13 = [23, 2, 45, 6, 7, 35, 76, 343];
// 1. it will take the parameter ("*")
// 2. it will concat in between all elements
// 3. it will convert to a string
// console.log(arr13.join("azhar"))


// 9. lastindexof() method

// let arr14 = ["Suhail", "Shamil", "Azhar", "Shamil"];
// console.log(arr14.indexOf("Shamil")) // 0
// // if u use indexof it will start from left to right
// // if u use lastindexof it will start right to left 

// console.log(arr14.lastIndexOf("Shamil")) // 3


// 10. length Method

let arr15 = [1, 2, 3, 4, 5, "Hello", 8473, 23, 23, 23, 23, 12, 1, 21, 2, 12];

// console.log(arr15.length)

// index starts from 0 


// length starts from 1

// console.log(arr15[0]) // 1
// console.log(arr15[1]) // 2

// console.log(arr15[2]) // 3
// console.log(arr15[3]) // 4
// console.log(arr15[4]) // 5
// console.log(arr15[5]) // "Hello"

// for (let i = 0; i < arr15.length; i++) {
//     console.log(arr[i])
//     // arr[0] ==> 

// }

let myArr = ["Shamil", "Suhail", "Azhar", "Ishwari", "Farhath", "Hello"]
// index        0           1         2        3           4        5 
// length       1           2         3        4          5         6   - 1

// console.log(myArr[0]) // shamil
// console.log(myArr[1]) // suhail
// console.log(myArr[2]) // azhar

// for (let i = 0; i <= myArr.length - 1; i++) {
//     console.log(myArr[i]) //

// }

// 11.unshift() ==> adds a element at first position of array
// 12.push() ==>  adds a element at last position of array


// 13. shift() ==> removes first element from array
// 14. pop() ==> removes last element from array

// 15. reverse() method

let arr16 = ["Hello", "Shamil", "Suhail", 10, 20, 30];
// console.log(arr16.reverse())

// 16. keys() method

let arr17 = ["Hi", "Shamil", "Suhail", "Azhar"]
///           0      1        2         3

let allIndex = arr17.keys(); // indexs

console.log(allIndex)

// for of loop


for (let index of allIndex) {
    console.log(index)
}

//  17. values method

let allValues = arr17.values() // values ==> array elements

for (let values of allValues) {
    console.log(values)
}




// 4 Exams

// Each exam on end of month


/*
1.every method
2.filter
3.find
4.findindex
5.forEach
6.map
6.Reduce
7.slice
8.some
9.sort
10.splice
11.to String()



*/





let arr = [`hi`, `shamil`, true, [`new`, `hi`, "want"], 56, false];

arr[3][1]="Heieee"

console.log(arr);
console.log(arr[3][1])