// Loops in JavaScript

/*
Loops: loops are basically means
iterations when you want execute a 
statement repeatedly multiple times

// executing a block of code multiple times
is called as Iterations 

// There are 2 types of Loops

1.Entry controlled Loops
2.Exit controlled loops

1.Entry controlled Loops
// In entry controlled loops 
there is a condition to stop the loop at starting
it self of the loop and the condition is true 
then only it will enter the loop like if statement condition ..this is known as entry controlled loop

2.Exit controlled loops
In the exit controlled loops 
the termination of loops is written after the loop
which is known as exit controlled loops

The main differnece is

if the termination logic before the loop its entry controlled 

if the termination logic is after the loop then its
exit controlled 

in both cases the loop will only start if the
condition is true

In Entry controlled loops 
1.for loop
2.while loop

In Exit controlled loops 
3.do while loop



*/

 //      1         // 3   // 4
// for (let i = 0; i <= 5; i++) {
     // 2
//     console.log(i)
// }
// i = 0;
// to print i ==> 0
//  i <=5 
//  i++ ==> 0 ==> 1

// 

for (let i = 0; i <= 5; i++) 
    
    {
    // 2
    console.log(i)
}
let i = 1;
while (i <= 5)
     {
    console.log(i)
    i++
}

// do while loop

let i = 10;
do {
    console.log(i)
    i++
}
while (i <= 5)