




/*
   # 12

  ============ TYPE OF FUNCTION============

         1. SIMPLE FUNCTION
         2. 
         3. 
         4. 




      SIMPLE FUNCTION
      
      

      function shamilBin(){
      console.log("")
      }

      fuction parameter


      ==>. A fuction can also be declared with parameter
      ==> A parameter is a value that is passed when declaring a fuction
       

*/

// function callName(a, b) {
//   console.log(`my name is ${a} and my age is ${b}`);
// }

// let age = 23;
// let names = `Shamil`;

// callName(names, age);

// function subtraction(a, b) {
//   console.log(a - b);
// }
// subtraction(20, 5);

// function add(a, b, c, d) {
//   console.log(a + b + c + d);
// }

// add(10, 29, 3, 6);

// function tableName(a, b) {
//   for (let i = 1; i <= b; i++) {
//     console.log(`${a} x  ${i}  = ${a * i} `);
//   }

// }

// // tableName(5,20);

// function sum(num1, num2, num3) {
//   let sum = num1 + num2 + num3;
//   return sum;
// }


// let finalName1 = sum(2,5,7)
// console.log(finalName)


// //======FUNCTION RETURN=========

// //  The return statment can be used to return the value fromth fuction call
// //if nothing is return the fuction return will be undefined


// function sum(num1, num2, num3) {
//     let sum = num1 + num2 + num3;
//     return sum;
//   }
  
  
//   let finalName = sum(2,5,7)
//   console.log(finalName)
  

   /*
  

//             NOTE :


        1. return should be used in the last line of the fuction
        2. anything which you write after return code will not execute




    ======FUCTION EXPRESSION=========

  1.    Fuction expression in javascript is a way to define a fuction as part of an expression
        ,usually by assighning it to variable .unlike fuction  Declareation 


  */

        
//      let tableName =function (a, b) {
//     for (let i = 1; i <= b; i++) {
//       console.log(`${a} x  ${i}  = ${a * i} `);
//     }
  
//   }
//   tableName(2,10)


// let subtraction=function (a, b) {
//   console.log(a - b);
// }
// subtraction(20, 5);

// let add=function (a, b, c, d) {
//   console.log(a + b + c + d);
// }
// add(3,4,5,6)


//======FUCTION HOSTING========


//1. in javascript Hoisting  is the behaviour  in which a fuction or variable can be used
//.    before declaration is Hoisting




            // SIR'S CODE




// Types of Functions 
/*
1.Simple Function
2.Functions Parameter
3.Function Return
4.Function Expression
5.Arrow Function

*/

// Simple Function

// function suhailAli() {
//     console.log("Hello")
// }

// suhailAli()

// Function Parameter

// A function can also be declared with parameter
// A parameter is a value that is passed when declaring a function

let age = 22;
let fname = "Suhail"


// function callName(name, age) {
//     console.log(`My Name is ${name} and My Age is ${age}`)
// }



// callName(fname,age)

// function sumNumbers(a, b, c, d) {
//     console.log(a + b + c + d)
// }

// sumNumbers(10, 20, 10, 10)


// function add(num1, num2, num3) {
//     console.log(num1 + num2 + num3)
// }

// add(1, 2, 4)


// Function Return
// The retrun statement can be useed to return the value from 
// the function call
// If nothing is returned the function returns as an undefined value


function add(num1, num2, num3) {
    let sum = num1 + num2 + num3
    // console.log(sum)
    return sum;
    console.log("Hello Suhail")

}



let finalValue = add(1, 2, 3);
console.log(finalValue)
console.log(finalValue + 10)

// Note : 
/*
1.return keyword should be used at last line of
the function

2.Anything which you write after return the code
will not execute 


*/



// Function Expression 
/*
A function expression in JavaScript is a way to define a function as part of an expression, usually by assigning it to a variable. Unlike function declarations, function expressions are not hoisted, meaning they are only available after they are defined.
*/

// Its is also knowns an anonymous function (a function without a name).





// Simple function

function sayHello() {
    console.log("Hello All")
}

sayHello()

// Function Expressions


let sayHello = function () {
    console.log("Hello All")
}

sayHello()


let sayHello = function () {
    console.log("Hello All")
}

sayHello()

// 1. take function name with a let and add before function 
// 2. add a equal to sign
