//======FUCTION HOSTING========

//1. in javascript Hoisting  is the behaviour  in which a fuction or variable can be used
//.    before declaration is Hoisting

sum(3, 5);
function sum(a, b) {
  console.log(`${a * b}`);
}

let add = function (a, b) {
  console.log(a + b);
};
add(4, 5);

// ==========ARROW FUCTION=======

/*

        1. arrow fuction was introduced in ES6
        2. Arrow fuction allow us to do shorter fuction syntax
        3. 





*/

//. BEFORE ARROW FUCTION

let sayBye = function () {
  console.log("Bye suhail");
};
sayBye();

// AFTER ARROW FUCTION

let sayBye1 = () => {
  console.log("Bye suhail");
};
sayBye();

// Hoisting cannod be worked on fuction expression and arrow fuction

//Hoisting work only in simple fuction

/*

            IIFE

       Immediate invoked fuction expresion     


*/
(function () {
  console.log("Hello shamil from IIFE");
})();





//          SIR'S CODE  







// Function Hoisting 
/*
In JavaScript Hoisting is a behaviour in which a function or a vairable can be
used before declaration is Hoisting



*/


// console.log(a) 
// let a = 10; 
// sayHello()


// function sayHello() {
//     console.log("Hello Suhail")
// }

sayHello()

let sayHello = function () {
    console.log("Hello Suhail")
}


// Arrow Functions

/*
1.Arrow Functions were introduced in ES6
2.Arrow Functions allows us to write shorter
function syntax

*/

// Before Arrow function

// let sayBye = function () {
//     console.log("Bye Suhail")
// }

// sayBye()

// Arrow Functions 


let sayBye = () => {
    console.log("Bye Suhail")
}

sayBye()

    // Note : Hoisting will not work in function expression and in arrow 
    // function

    // Hoisting will work in only Simple functions 



    // IIFE 
    // Immediately Invoked Function Expression (IIFE)

    /*
    A function expression can be immediately executed by wrapping it in parentheses.
    
    
    
    */

    (function () {
        console.log("Hello");

    })
    
    ();
