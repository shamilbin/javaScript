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

let arr10 = ["hi", 1, 3, false, null, "Shamil"];

// console.log(arr10.at(5)) // Shamil
// console.log(arr10.indexOf("Shamil")) // 5
 // lets suppose there is no matching element
 // then it will print you value as -1
// console.log(arr10.indexOf("Suhail")) // -1

// 7. Array.isArray() Method;

// check the array is an array or not

let arr11 = {
  fname: "Suhail",
  age: 24,
};

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
//  if u use indexof it will start from left to right
//  if u use lastindexof it will start right to left

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

// let myArr = ["Shamil", "Suhail", "Azhar", "Ishwari", "Farhath", "Hello"]
 // index        0           1         2        3           4        5
 // length       1           2         3        4          5         6   - 
 // console.log(myArr[0]) // shamil
 // console.log(myArr[1]) // suhail
 // console.log(myArr[2]) // azha
 // for (let i = 0; i <= myArr.length - 1; i++) {
 //     console.log(myArr[i]) /
 // }

 //1.unshift() ==> adds a element at first position of array
//  12.push() ==>  adds a element at last position of array//  
// 13. shift() ==> removes first element from array
//  14. pop() ==> removes last element from array
// 15. reverse() method

// let arr16 = ["Hello", "Shamil", "Suhail", 10, 20, 30];
 // console.log(arr16.reverse())

 // 16. keys() method

// let arr17 = ["Hi", "Shamil", "Suhail", "Azhar"]
 ///           0      1        2         3

// let allIndex = arr17.keys(); // indexs

// console.log(allIndex)

// for of loop

// for (let index of allIndex) {
//     console.log(index)
// }

// 17. values method

// let allValues = arr17.values() // values ==> array elements

// for (let values of allValues) {
//     console.log(values)
// }

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
//                  DAY 2


// 1.every method
// 2.filter
// 3.find
// 4.findindex
// 5.forEach
// 6.map
// 6.Reduce
// 7.slice
// 8.some
// 9.sort
// 10.splice
// 11.to String()


// 18. every() method
// Checks if all elements satisfy a condition.
// and also it gives output in a boolean format (true/false)

// let arr = [-10, 10, 20, 30, 40];
// every ele > 6 ===> false
// every elem < 6 ===> true

// let check = arr.every(find)


// function find(x) {
//     return x % 2 == 1;
// }



// 1st method

// let check = arr.every(
//     function find(x) {
//         return x >= 6;
//     })

// 2nd method
// let check = arr.every((y) => {
//     return y >= 1
// })


//     (x) => {
//     return x >= 3
// }


// console.log(check)


// 19. filter() method
// 1.Returns a new array with elements that pass the condition.
// 2. It will give you a new array which has satisfy the condition

let arr = [2, 4, 6, 8, 10, 11];


let check = arr.filter((x) => {
    return x > 4
})

// console.log(check)

// 20. find() method
// Returns the first element that satisfies the condition.


let arr1 = [-10, -5, 0, 5, 10];


let check1 = arr1.find((x) => {
    return x > 0
})

// console.log(check1)


// 21. findIndex()
// Returns the index of the first element that satisfies the condition.

// let arr1 = [-10, -5, 0, 5, 10];


// let check1 = arr1.findIndex((x) => {
//     return x > 0
// })

// console.log(check1)


// 22. toString()
// It will convert Array elements to string
let arr2 = [1, 2, 3, "Hi"];
let checks = arr2.toString()
// console.log(checks, typeof checks)

// 23.sort() Method

let numbers = [5, 3, 9, 2, 1, 6, 11, 22, 33, 35, 25, 17, 10, 100];
// console.log(numbers.sort())

// console.log(numbers.sort((a, b) => a - b)) // ascending order
// console.log(numbers.sort((a, b) => b - a)) // descending  order


// 24. slice() Method 

let num = [10, 20, 30, 40, 50, 60, 70];
//         0    1   2   3   4   5   6 ==> index (start position)
//         1    2   3   4   5   6   7==> length (end position)
// slice(index,length)
// console.log(num.slice(2, 5))

// 25.splice 

/*
The splice() method modifies the original array by:

Removing elements

Adding elements

Replacing Elements

Remove all elements from a point 


*/

// let basket = ["apple", "banana", "mango", "orange","pineapple"];
 // length       1         2        3         4       
 // index        0         1        2         3       4
 // How to remove elementsssss 

// let person = basket.splice(0, 3);
// console.log(basket);

// console.log(person)

// Add elements using splice 

// Replacing
let basket = ["apple", "banana"];
//  index       0        1
// length       1        2

// index
// how many elements to remove
// what to add


// basket.splice(1, 0, "grapes");
// basket.splice(1, 0, "orange", "pineapple")



// Replace 

basket.splice(1, 0, "blueberry", "avacado")


// with splice 
// remove
// you can add
// you can replace
// remove all from a element
console.log(basket)

let names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  index      0         1          2        3
console.log(names.splice(8))



// some() method
//Checks if at least one element satisfies the condition.
// it will also gives in boolean output (true/false)



let num1 = [1, 3, 5, 6]

let everyCheck = num1.every((x) => {
    return x % 2 == 0
})
console.log(everyCheck) // to check all elements are equal to 0

let checkOnlyElement = num1.some((x) => {
    return x % 2 == 0
})
console.log(checkOnlyElement) // to check only 1 element match


// reduce() method 
// used to calculate the single operation on all elements 
// this can be only performed on numbers 

let sum = [1, 2, 3, 4, 5]
let finalSum = sum.reduce((start, currentValue) => {
    return start + currentValue
}, 0)
console.log(finalSum)


// start     current value == Total (start + current value)
//   0           1         ===>  0+1 ==>1
//   1           2         ===>  1+2 ==>3
//   3           3         ===>  3+3 ==>6
//   6           4         ===>  6+4 ==>10
//   10          5         ===>  10+5 ==> 15 



//************************************************************************************************* */


// forEach Method 

/*
The forEach() method calls a function for each element in an array. 

The forEach() method is not executed for empty elements.

Always remember that it doesn’t return anything and if you try to get the value it will be undefined.


Note : In forEach you cannot return the values
*/
// Returing of it
//1 . forEach does not pass the value
//2.   map does the passing value (return)
// let numbers = [5, 4, 3, 2, 1];

// numbers.forEach((x) => {
//     console.log(x * 2)
// })

// // here


// let finalData = numbers.map((x) => x * 2);
// console.log(finalData)

// 2.Ability to chain other method

let numbers = [5, 4, 3, 2, 1];
// numbers.forEach((x) => {
//     console.log(x * x).filter((x) => x > 9)
// })

// console.log(numbers.forEach((x) => x * x))

numbers.forEach((x) => {
    console.log(x * x)
})

let data = numbers.map((x) => x * x)
console.log(data)

// console.log(numbers.map((x) => x * x).filter((x) => x > 9))

// 9/10 uses map

// map is faster than forEach


// 3 things you need to remember about map

//1. it returns the value so you can store it and pass to the next variable
//2 .as it returns in array .. you can chain other array methods
//3. map is faster then forEach 


// let nums = [1, 2, 3, 4, 5];
// let check = nums.every((x) => 
//     {
//     return x >= 1
// }
// )

// let check = nums.every((x) => x >= 1)

// console.log(check)


// let age = 100;

// if (age >= 18) console.log("You are 18")
// else {
//     console.log("Not 18")
// }

let person = { fname: "Shamil", age: 20 }

// to declare objects {} this is must
// for arrays [] this is must

// Task 

// 1. create a sheet of all array methods and attach to wall
// 2. Practice string methods google about it and learn
// 3. watch recordings and get cleared all the topics 
// 4. Practice all types of functions
// 5. Need a blog on all array methods 
// Deadline : 11:00 PM


// Task to submit suhail
// 1. submit report to suhail before you sleep
// 2. update me about your task before you sleep


/*
pwd

*/

//              Shamils code



// let arr = [`hi`, `shamil`, true, [`new`, `hi`, "want"], 56, false];

// arr[3][1]="Heieee"

// console.log(arr);
// console.log(arr[3][1])

// let check = arr.filetr((x) => {
//   return x % 2 == 0;
// });
// console.log(check);

// let cal = arr.every(calcu);

// function calcu(y) {
//   return y % 2 == 1;
// }

// console.log(cal);

// // //.         filter

// let arr = [1, 2, 3, 7, 5, 13];
// // let check=arr.filter((x)=>{
// //     return x%2==1
// // })

// // console.log(check)

// let check1=arr.findIndex((x)=>{
//     return x>4
// })
// // console.log(check1)

// let arr3 =[2,3,"hi",true,false]
// let check3=arr3.toString()
// console.log(check3, typeof check3)

//              sort method

// let arr = [9,8,7,6,5,4,3,2,1];

// let sorted = arr.sort();
 // console.log(sorted);

// let num =[20,10,30,40,50,60,70,80,90];

// console.log(num.slice(4,8))

// let basket =["Apple","Banana","Coconut","Guva"]

// console.log(basket)
// basket.splice(1,2,"Orange","BluBerry","Avacado")
// console.log(basket)

//          some() methods

//          reduce()

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let final = num.reduce((a, b) => {
  return (a += b);
}, 0);

console.log(final);
