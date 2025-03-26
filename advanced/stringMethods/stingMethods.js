
// String Methods

// 1.CharAt() Method
// Give me index ==> value

let str = "Hello";
// console.log(str.charAt(1))


// 2.concat Method

let a1 = "Hello"
let b1 = " World";
// console.log(a1.concat(b1, " Shamil", " Suhail"))

// 3. endsWith() Method
/// The endsWith method returns true 
// if a string ends with the given value

let sentence = "Hello Suhail I am Driving Car";

// let check = sentence.endsWith("Car");
// console.log(check)


// 4. includes() Method
// The includes method check if one string
// can be found inside another string

// let message = "JavaScript is fun! Hello I am Shamil";

// let check = message.includes("Bye");
// console.log(check)


// // 5. indexOf() Method 

// let str1 = "Ishwari";
// console.log(str1.charAt(0)) // I
// console.log(str1.indexOf("I")) // 0


// 6. lastIndexof() Method

let m1 = "programming";
// //        01234     10
// console.log(m1.indexOf("g")) // 3
// console.log(m1.lastIndexOf("g")) // 10


// 7. length Method
// length starts from 1 
let l1 = "Bye";
// console.log(l1.length)


// 8. PadEnd()
// The PadEnd() method pads the current string to the end

let m2 = "CODEWORD";
// console.log(m2.padEnd(6, "$"))

// 9. PadStart()
// Append to start with any string
// by passing total length

let m3 = "CODE";
// console.log(m3.padStart(10, "$"))


// // 10. repeat() Method

// let m4 = "[Suhail-Hello] ";
// console.log(m4.repeat(100))


// 11. replace() Method

let message = "Hello Shamil";
// console.log(message.replace("Shamil", "Ishwari"))



// 12. Slice() Method 

let s1 = "Hello"
// index  01234
// length 12345

// console.log(s1.slice(1, 5))

// 13. split() Method

// 1. using split method you can convert a string to array
// 2. pass the split value from where you want to split it

// let s2 = "Apple+Mango+Orange";
// let sent = "Hello I am Suhail"
// console.log(sent.split(" "))

// // 14. startsWith() Method
// // gives output in a  Boolean Values
// let m5 = "Hello I am Suhail"
// console.log(m5.startsWith("hello"))


// 15. toLowerCase

// let m6 = "HELLO ALL I AM Ishwari";
// console.log(m6.toLowerCase())


// // 16. toUpperCase
// console.log(m6.toUpperCase())

// 17. trim() Method
// // trim will just remove spaces from start and end of a string
// let msg1 = "  Hello I am Suhail Roushan     ";
// console.log(msg1)
// console.log(msg1.trim())


// 18. subString() Method


let m7 = "CODE";
// index  0123
// length 1234      
// console.log(m7.substring(1, 3))



// How to add a new line in JS
// \n means new line in JS
// \v means vertical tab
// \t means horizontal tab
console.log("Hello I am Suhail \vHello I am Shamil \vHello I am Ishwari")

console.log("Hello I am Suhail Hello I am Shamil Hello I am Ishwari")


// "" , '', ``

console.log("HELLO")
console.log('Hello')
console.log(`Hello`)
