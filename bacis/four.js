
// Type Conversions 
// In programming language type conversion is the process of 
// converting one data type to another data type

// Example: Number to String

// There are 2 types of conversions in JavaScript 

// 1.Implicit Conversion : Automatic Conversion
// 2.Explicit Conversion : Manaul Using Built-in Data types methods 

//  Implicit Conversion

// 1. AnyData to String (using by string operator + )
// let data = 2
// data = 2 + ""
// console.log(data)
// console.log(data, typeof data)

// let bool = true + "2"
// console.log(bool, typeof bool)

// let str = "suhail" + "2"
// console.log(str, typeof str);

// let nulls = null + "2";
// console.log(nulls, typeof nulls)

// let undefinedStr = undefined + "2";
// console.log(undefinedStr, typeof undefinedStr)

// Note : Anything with string add's up to it which is concat


// let a = "suhail" - "10"; // NaN
// // Not an Number
// // console.log(a)

// + in strings will not work in calcus ...it will concat 

// ////Anything to Number 

// let num = "4" - "";
// console.log(num, typeof num)

// let str = "suhail" - "hello";
// console.log(str)

// // Boolean to Number 

// // True ==> 1
// // False ==> 0

// let a1 = true + 4;
// console.log(a1)

// let b1 = 5 - true;
// console.log(b1) // 4

// let c1 = 4 - false;
// console.log(c1)


// // Undefiend to AnyData Type

// let result;
// result = 4 + undefined;
// console.log(result)
// result = 4 - undefined
// console.log(result)

// result = true + undefined;
// console.log(result)

// result = null + undefined;
// console.log(result)

// // true ==> 1
// // false ==> 0
// // null ==> 0;

// let d1 = 5 + null;
// console.log(d1) // 5


// Explicit Conversions 

/*

1.Using Number Method 

let


*/

// String to Number

// let strNumber = "20"
// console.log(strNumber)
// CONVERT It into Number


// let finalNumber = Number(strNumber);
// console.log(finalNumber, typeof finalNumber)


// Boolean to Number

// let b1 = true; // 1
// let c1 = false; // 0
// console.log(b1, c1)
// console.log(typeof b1, typeof c1)

// let convert1 = Number(b1);
// let convert2 = Number(c1);
// console.log(convert1, convert2)
// console.log(typeof convert1, typeof convert2)


// true ==> 1
// false ==> 0

// null ==> 0

// String Method 

// let s1 = 20;
// console.log(s1, typeof s1)

// let covert = String(s1);
// console.log(covert, typeof covert)

// let result;


// result = String(100);
// console.log(result);

// result = String(null);
// console.log(result);

// result = String(undefined);
// console.log(result);

// result = String(true);
// console.log(result);

// result = String("Hello");
// console.log(result);

// result = String(NaN)
// console.log(result);


// console.log(true);
// console.log(NaN)
// console.log(null)
// console.log(undefined)



// Boolean Method

let b1 = "true";
// console.log(b1)

let c1 = 1;

let c2 = 0;

let convert1 = Boolean(b1);
// console.log(convert1)

convert1 = Boolean(0);
console.log(convert1)
convert1 = Boolean(NaN);
console.log(convert1)
convert1 = Boolean("Hello");
console.log(convert1)
convert1 = Boolean(""); // no space
console.log(convert1)
convert1 = Boolean(""); // space
console.log(convert1)


// All Truthy Values 

/*
true – Boolean true value
Any nonzero number (e.g., 1, -1, 3.14, Infinity, -Infinity)
Any non-empty string (e.g., "hello", "false", "0")

*/


// All Falsy Values


/*
1.false
2.0
3.-0
4.""
5.null
6.undefined
7.NaN



*/
// truthy value

"0"
"false"
"-0"
"NaN"
" "


// false
""
