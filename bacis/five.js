//   let number = 5;

//   if(){
//     console.log("You are great")
//   }

// if ("true"){
//     console.log("Condition meeted")
// }

// let num = -5;

// if (num > 0) {
//   console.log("The given number is positive");
// } else {
//   console.log("The goven number is negative");
// }

// let numCheck = 6;

// let checker = numCheck % 2;

// if (checker == 0) {
//   console.log("The given number is even");
// } else {
//   console.log("The given number is odd");
// }

// let signal = "yellow";

// if (signal == "Green") {
//   console.log("GO");
// } else if (signal == "yellow") {
//   console.log("WAIT");
// } else if (signal == "red") {
//   console.log("STOP");
// }else{
//     console.log("Wrong colour")
// }

/// if age is >= 18 ..you can vote
// if age is <= 18 .. you can't vote
// if age is negative ..say negative age
// if age is greater than 100 ...say you cant vote

let age = 150;

if (age > 100) {
  console.log("youbcan't vote over age");
} else if (age >= 18) {
  console.log("You can vote");
} else if (age < 0) {
  console.log("Your age is negative");
} else if (age < 18) {
  console.log("You can't vote under age");
} else {
  console.log("Wrong input");
}




/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/







// if else statements 

/*

In computer programming there may arise a situations
where you have to run a block of code among more than once or by checking an situation

In such conditions you can use the JS if else
statements ..which can take decisions based on
the conditions


In JavaScript there are 3 forms of if else statements

1. if statement
2. if else statement
3. if ....else if ......else statement


1. if statement
// syntax of its

if(condition){

// code to run it

}


1. if the condition is true ..it will run the code inside the block of it

2.if the condition is false it will skip


3. the condition is based on all truthy and falsy values
*/




// let number = 2;

// if (number < 5) 
//     {
//     console.log('Helllo')
// }


// false values 

// // null, false, 0, "", undefined -0, 
// if (-0) {
//     console.log("Hello All")
// }


/*
If else statement
An if statement can have optional esle clause
the syntax is

if(condition){

// code will work only if condition is true


}else{
// it will work only if conition is false
}



*/


// let num = 2;

// if (num > 4) {
//     console.log("Hello I am True")
// } else {
//     console.log("Hello I am False ")
// }


// make an if else statement to check a number is 

/// +ve or -ve 


// sudo code

// how do we find a number is +ve or -ve
// check if number is >0 its a +ve
// check if number is <0 its a -ve

// let numCheck = 0;

// if (numCheck >= 0) {
//     console.log("Its a Positive")
// } else {
//     console.log("Its a Negative")
// }



// check if a number is even or odd

// let num = 5


// if (num % 2 == 0) {
//     console.log("the number is even")
// } else {
//     console.log("the number is odd")
// }



/*
if ....else if ......esle

It is used to to excecute a block of code
when there are multiple true conditions and to make a
choice between of all true conditions

syntax

if(condition)
{

}
else if(condition){

}
else{

}




*/

// Grade System

// marks  >= 90 ===> A
// Marks  >= 80 ===> B
// marks  >= 70 ===> C
// marks  >= 60 ===> D
// else Failed 

// let myScore = 70;

// if (myScore >= 90) {
//     console.log("Its a Grade A")
// }
// else if (myScore >= 80) {
//     console.log("Its a Grade B")
// }
// else if (myScore >= 70) {
//     console.log("Its a Grade C")
// } else if (myScore >= 60) {
//     console.log("Its a Grade D")
// } else {
//     console.log("You have failed")
// }

// take a variable as Signal = "green"
// if green ==> go
// if yellow ==> wait
// if red ==> stop

let signal = "green"
console.log(signal, typeof signal) // "green"



if (signal == "green") {
    console.log("go")
} else if (signal == "yellow") {
    console.log("wait")
} else {
    console.log("stop")
}


/// if age is >= 18 ..you can vote 
// if age is <= 18 .. you can't vote
// if age is negative ..say negative age
// if age is greater than 100 ...say you cant vote


let age = 150;
if (age >= 18 && age > 100 && age < 0) {
    console.log("You can vote");
}
else if (age <= 18) {
    console.log("You can't vote because you age is > 100 or < 18");
}

else if (age > 100) {
    console.log("You can't vote");
};
