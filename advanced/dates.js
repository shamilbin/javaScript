//          sirs code


// Dates in JavaScript

let currentDate1 = new Date()
console.log(currentDate)
//2025-03-21T22:57:17.707Z 
// this above format is in ISO Format
// 2025 ==> year
// 03 ==> month march
// 21 ==> Date 
// T ==> Indicates beginging of time 
// 09 ==> 9am and 22 ==> 10pm
// 57 ==> minutes
// 17 ==> seconds
// 707 ==> milliseconds 
// Z ==> Z is known as the time is in UTC Format 
// UTC ==> Universal Time Coordinate 

// By default the new Date gives time in UTC - ISO Format

// If you are in India +5:30 
// it means UTC Time + 5:30 

let date1 = new Date().toDateString();
// console.log(date1) // Fri Mar 21 2025


let date2 = new Date().toLocaleDateString();
// console.log(date2) // 3/21/2025

let date3 = new Date().toLocaleString();
// console.log(date3) // 3/21/2025, 10:06:32 AM

let date4 = new Date().toString(); // for mac it assigns current time 
console.log(date4)
// console.log(date4) // Fri Mar 21 2025 10:07:08 GMT+0000 (Coordinated Universal Time)


// To get time in your Time Zone

/*
"Asia/Kolkata" – India Standard Time (IST)
"Asia/Dubai" – Gulf Standard Time (GST)
"Asia/Tokyo" – Japan Standard Time (JST)
"Asia/Shanghai" – China Standard Time (CST)
"Asia/Singapore" – Singapore Time
"Asia/Jakarta" – Western Indonesia Time
"Asia/Tehran" – Iran Standard Time

*/
let date5 = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
})
// console.log(date5)

// Parameters of Date 
// Tasks :
/*
1.Complete ther blog on Types of Objects
2.Learn CRUD and Array methods of Objects and Arrays
3.Learn All Date Methods and Blog on Date Methods
4.Make a Google doc on What is Epoch Time and Why Array's start 
from 0
5.Learn About Array Methods First any 15 Methods and push code to
github
6.Update your GitHub ReadMe
7.Send me timesheets
8.Push the code to github

Deadline Saturday 9:00 pm IST

*/


// let i = 1;

// while (i <= 10) {
//     console.log(i)
//     i++
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }


// let i = 1;

// do {
//     console.log(i);
//     i++
// } while (i <= 10)






//          Shamils'code




//-----------------Dates in js---------------

let currentDate = new Date();
console.log(currentDate);

//       the above formate is in ISO

// let date1 = new Date().toDateString();
// console.log(date1);

// let date2 = new Date().toLocaleDateString();
// console.log(date2)

// let date3 = new Date().toLocaleString();
// console.log(date3)

// let date4 =new Date().toString();
// console.log(date4)

let date15 = new Date().toLocaleString("en-IN",{
    timeZone:"Asia/Kolkata",
})

console.log(date5)




/*

Tasks :
/*
            1.Complete ther blog on Types of Objects
            2.Learn CRUD and Array methods of Objects and Arrays
            3.Learn All Date Methods and Blog on Date Methods
            4.Make a Google doc on What is Epoch Time and Why Array's start 
            from 0
            5.Learn About Array Methods First any 15 Methods and push code to
            github
*/




// Parameters of Date 
// Tasks :
/*
1.Complete ther blog on Types of Objects
2.Learn CRUD and Array methods of Objects and Arrays
3.Learn All Date Methods and Blog on Date Methods
4.Make a Google doc on What is Epoch Time and Why Array's start 
from 0
5.Learn About Array Methods First any 15 Methods and push code to
github
6.Update your GitHub ReadMe
7.Send me timesheets
8.Push the code to github
Deadline Saturday 9:00 pm IST
*/