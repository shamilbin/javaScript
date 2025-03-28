
//              sirs code




// setTimeOut and setInterval

// let myName = 'Suhail';
// console.log(myName)

// setTimeout
// it accepts 2 parameters
// 1. function name or whole function which need to run after time
// 2. time in milliseconds

function sayHello() {
    console.log("Hello I am Suhail")
}

// 1 second is 1000 milliseconds 
// 1000 ==> 1 second
// 5000 ==> 5 seconds

/// method 1 

// setTimeout(function sayHello() {
//     console.log("Hello I am Suhail")
// }, 2000)


// let myName = ()=>{

// }

// // method 2 
// setTimeout(sayHello, 2000)


// // method 3

// setTimeout(() => {
//     console.log("Hello")
// }, 2000)



// SetInterval
// Runs a function repeatedly at a fixed interval of time


// setTimeout(() => {
//     console.log("Hello")
// }, 2000)



// let timeId = setInterval(() => {
//     console.log("Hello")
// }, 1000)

// 1. Print every second
// 2. But i want to stop at 5th second 
// Using SetTimeout 
// clearInterval()


// // To stop setInterval


// setTimeout(() => {
//     console.log("I am coming from settimeout to stop at 5 second")
//     clearInterval(timeId)
// }, 5000)


setInterval(() => {
    console.log("You are LoggedIn in Instagram")
}, 1000)

// setTimeout(() => {
//     console.log("Logging Out you , Please Login Again")
//     clearInterval(isActive)
// }, 5000)

// let a = setTimeout();
// console.log(a)















//              setTime out

// function sayHai() {
//   console.log(`Hello World in 1 sec`);
// }

// setTimeout(function sayHello() {
//   console.log(` Hello World in 3 sec`);
// }, 3000);

// setTimeout(sayHai, 1000);

// setTimeout(() => {
//   console.log(`Hello world first`);
// }, 500);

///     setIntervall

let timeId = setInterval(() => {
  console.log(`Hello`);
});

setTimeout(()=>{
    console.log(`You are aborted`)
    clearInterval(timeId)
},3000)