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

let date5 = new Date().toLocaleString("en-IN",{
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
*/*/