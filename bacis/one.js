/* 


// */

var a = 10;
console.log(a);

let b = 20;
console.log(b)

const c= 3;
console.log(c)

console.log(`Hello from ishwari`)
console.log(`Hello from ishwari`)
console.log(`Hello from ishwari`)
console.log(`Hello from ishwari`)


var name = "shamil";
 console.log(name)

 var age =22;

 console.log(age);

 var isAlive =true;
 console.log(isAlive)


Redeclare and Reassign

var a=50;
a=100;
// console.log(a)

// let b= 20;
// b=40;
// console.log(b);

// const c = 60;
//  c= c++;
// console.log(c)


// var is the first way of using till 2015
// 



/* 

Data type in javascript

There are two type of data type in js


1. Primitive 
2. Non Primitive

Primitive :- Can store only one type of Data
Non Primitive :-  Can store Multiple type of data type

1 Primitive :
    
   a. String ==> textual data.    er: "shamil" 
   b. Boolean ==>any of two variable
   c. number ==> any integer of floating value
   d. Null ==> denotes null or an empty value
   e. Undefined ==> a datatype as there variable is not defined yet 



*/

// Example of string

// let firstName = "shamil";
// let lastName  = "TK"

// Bolean

// let isAlive = true;
// let isValid = false ;

// NUmber

// let age = 20;
// let number = 54.34 ;
// let pie = 3.14 ;
   

// Null 

// let box = null ;
// box =20 ;
// console.log(box);

// // Undefined

// let box1 ;
// console.log(box1)

/*
 Non Primitive data type

1. Object 
2. Array

Object in javascript


// */

// let person = {
//     fname : "shamil",
//     age : 23 ,
//     isAlive : true ,
//     newPhone : null

// }
// // console.log(person)

// let student =["shamil ", "suhail",23, null , true];

// console.log(student[3])

let student ={
    fname : "shamil",
    age: 23,
    grade: "10th",
    rollNumber : 34
}

console.table(student)






/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/


// Variables in JavaScript 

/*
What is Variables
Variables are the containers for storing data values

there are 3 types of variables to store 

1.var
2.let
3.const 
4.using default 

*/

var a = 10;
console.log(a)  // 10

let b = 10;
console.log(b);

const c = 100;
console.log(c)

d = 50; // by default if you didnt added anything before variable name it will consider as var
console.log(d)


var names = "Suhail"; // String means all characters with numbers which comes in double and single quoatation
console.log(names)

var age = 20; // number is somethig which is only number without any quoatation
console.log(age)

var isAlive = true; // boolean ...which has only 2 values ...either true or false
console.log(isAlive)



//    Redeclare Vs Reassign 



var a = 10;
var a = 20;

console.log(a)



var a = 50;
a = 100;
console.log(a)

// In Var u can perfrom redeclare and reassign 
// In let u can't perform redeclare but reassign
// In const  no redeclare and reassign







let a = 10;
let a = 20;
console.log(a)

let a = 10;
a = 20;
console.log(a)

const a = 10;
const a = 40;
console.log(a)


const === constant 
const a = 10;
a = 40;
console.log(a)

const aadharNumber = 7568947598475;
const phone = 5738344;

const age = 22;
age = 23

const pie = 3.14;
let length = 100;
length = 200;


// var was the 1st way to use variables till 2015

// let and const came in 2015 in es6 update

// so from now you shouldnt be using var

// var is a outdated method to store data
// var is a global scope thats one of the reason
// not to use var 

// use let instead of var 



/*
Data Types in JavaScript

There are 2 types of data types in javascript

1.Primitive Data Type
2.Non Primitive Data Type


Primitive Data Type :- It can only store single type of data
Non Primitive Data Type :- It can store multiple types of data type

Primtive Data Type

1.String ==> Textual Data ex: "Hi Hello", "Bye" , "Suhail34343"
2.Boolean ==> Any of the 2 values which are either true or false 
3.Number ==> Any integer or floating value ex : 20, 34.35 , 100 
4.null ==> denotes a null like a empty value  ex: let a = null;
5.undefined = a data type as there variable is not defiend yet ex: let a;



*/

// These are the examples of string 
let firstName = "Suhail";
let lastName = 'Roushan';
let fullName = `Suhail Roushan`

// Boolean

let isAlive = true;
let isValid = false;

// Number 

let age = 20;
let number = 53.244;
let pie = 3.14;

// null

let box = null;
box = 20;
console.log(box);

// undefined;

let box1;
console.log(box1)


let shamilPhone = null;
console.log(shamilPhone) // null


/*
Non Primitivae Data Type : It stores multiple data types

1.Objects 
2.Arrays 

Objects in JS
object has a key value paired
left one is key
right one is value 
*/

let person =
{
    fname: "Suhail",
    age: 23,
    isAlive: true,
    newPhone: null
}
// console.log(person);


// console.log(person.fname)
// console.log(person.age)

//2 . Arrays : Collection of multiple data types 


let students = ["Suhail", "Shamil", "Azhar", "Ishwari", 22, true, false, null];
//  0         1         2         3       4    5     6       7
// All arrays start from 0th index
// Arrays works on indexs values
// indexs are keys of the array
console.log(students[7])



let a = 10;
console.log(a);

// create a new object and

//  use console.table(variableName)

console.table(person)