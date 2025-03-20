// Operators in JS

/*
In JavaScript an operator is a special type of symbol
used to perform operation on operands 
ex: values and variables

example : 2 + 3 = 5

Where 2 and 3 are operands 
and + is a operator 


JavaScript Operators 
1.Assignment Operator
2.Arithemtic Operator
3.String Operator
4.Bitwise Operator
5.Logical Operator
6.Comparison Operator
7.Other Operators 


*/

// Assignment Operator

/*
Assignment operatoer are used to assign values to a variable 
const a = 5;

const is a datatype
a is a variable
5 is a value 

Operator            Name                        Example 
 =                  Assignment Operator          a = 7; ==> 7
 +=                 Addition Assignment          a += 5; ==> a = a + 5;
 -=                 Subration Assignment         a -= 5; ===> a = a - 5;
 *=                Multiplication Assignemtn     a *= 5; ==> a = a * 5;
 /=                Division Assignment           a /= 5; ==> a = a / 5;
 %=                Reminder Assignment           a %= 5; ==> a = a % 5;
 **=               Exponentiation Assignment     a **= 5; ==> a = a **2


*/

let num = 10;
num += 10; // 20
// console.log(num)
// num -= 5; // 15
// console.log(num)

num *= 4; // 60
// console.log(num)

num /= 6; // 10
// console.log(num)

num %= 2; // 0
// console.log(num)

// num ** 2
let num2 = 4;
num2 **= 2;
// console.log(num2)

// Arithemtic Operator

// Arithmetic Opreator are used to perform artimetic calculations

// Operator                 Name          Example

//  +                     Addtion          x + y
//  -                     Sub              x - y
//  *                     Mul              x * y
//  /                     Division         x / y
//  %                     Reminder         x % y
//  ++                    Increment by 1   x++ or ++x
//  --                    Decrement by 1   --x or x--
//  **                    Exponentation (Power) x ** y

let a = 2;
let b = 3;

// console.log(a + b); // 5
// console.log(a - b); // -1
// console.log(a * b); // 6
// console.log(a / b); // 0.66666
// console.log(a % b); // 2
// console.log(a ** b); // 8

let num1 = 22;
console.log(typeof num1);
let fname = "Suhail";
console.log(typeof fname);

let personObj = {
  fname: "Suhail",
  age: 22,
};

// console.log(typeof personObj)

// let arrr = [10, 20, 30, "Suhail", false];
// console.log(typeof arrr)

// let a = 30;
// let b = "30";
// let c = "true";
// let d = true;
// let e = "true 30";
// let f = "null";

let obj = {};
console.log(typeof obj); // object

let arr = [];
console.log(typeof arr); // object

let g = null; // null // object
console.log(typeof g);

// String Operator

/*

In JavaScript you can also use the + operator
to concat (join) two or more strings


*/

let a1 = "Suhail";
let b1 = "Ali";

console.log(a1 + " " + b1);

// Bitwise Operator
// Range of Bitwise Operator
// -(2^31) to (2^31 - 1)
// -2147483648 to 2147483647
// The Bitwise operator is converted into a 32 bit binary digits (with zero's and one's)
// Bitwise Operator are used to perform bit by bit operation on numbers
// Operator                Name            Example
//  &                       AND             x & y
//  |                       OR              x | y
//  ^                       XOR             x ^ y
//  ~                       NOT             ~x

// Bitwise  AND (&)
// Table for Bitwise AND
// X   Y  Output
// 0   0   0
// 0   1   0
// 1   0   0
// 1   1   1

let c = 10;
let d = 5;
console.log(c & d);

// Bitwise OR (|)
// Table for Bitwise OR
// X   Y  Output
// 0   0   0
// 0   1   1
// 1   0   1
// 1   1   1

let e = 10;
let f = 5;
console.log(e | f); 

// Bitwise XOR (^)
// Table for Bitwise XOR
// X   Y  Output
// 0   0   0
// 0   1   1
// 1   0   1
// 1   1   0
// Same digits are 0 
// diff digits are 1 
let g1 = 10;
let h1 = 2;
console.log(g1 ^ h1);

// Bitwise NOT (~)
// Table for Bitwise NOT
// X   Output
// 0   1
// 1   0

let z = 20;
console.log(~z); // -21
//XOR ==> -(x + 1)


// Logical Operator
// Logical Operators deals with Only Boolean vALUES
// Which are either true or false 

// Logical AND (&&)
// 0 == false
// 1 == true
// Table for Logical AND
// X         Y     Output
// false    false    false
// false    true     false
// true     false    false
// true     true     true

// Logical OR (||)
// Table for Logical OR
// X         Y     Output
// false    false    false
// false    true     true
// true     false    true
// true     true     true

// let a = 4;
// let b = 5;

// console.log(a > b && b > a )
// console.log(a < b && b > a)
// console.log(a > b || b < a)             
// console.log(a < b || b > a)


// lOgical NOT (!)
// Table for Logical NOT
// X         Output
// false    true
// true     false

// let a = true;
// console.log(!a) // false

// let b = false
// console.log(!b) // true

// Comparison Operator
// Comparison Operator are used to compare two values
// and gives a boolean value as a result
// Operator                Name            Example
// ==                      Equal to         x == y
// ===                  Strictly   Equal value and Equal type       x === y
// !=                      Not Equal to     x != y
// !==                    Strictly Not Equal value or Not Equal type       x !== y
// >                       Greater than     x > y
// <                       Less than        x < y
// >=                      Greater than or Equal to      x >= y
// <=                      Less than or Equal to         x <= y

let x = 5; // number 
let y = "5"; // string
/// == it will only check value should be matching ...it dosen't check type
console.log(x == y);// true 

// === it will check both value and type should be matching
console.log(x === y); // false 

//!= it will only check value should be not matching...it dosen't check type
console.log(x != y); // false   
// !== it will check both value and type should be not matching
console.log(x !== y); // true

let c1 = 5
let c2 = "5";
console.log(c1 == c2) // true 
console.log(c1 === c2) // false
console.log(c1 != c2) // false 
//          5     "5" // false                            
console.log(c1 !== c2) // true
//          5  !== "5"

//


let d1 = "10"
let d2 = 5;