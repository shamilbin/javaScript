// BREAK            CONTINUE          SWITCH
// =======           ========          ======

/*.  
        -------------BREAK STATMENT------------

1. the brake statment is used to exit a loop or switch immediatly
2. when it is used it stop the execution and exit the loop or code block "{}" 



*/

//      -----------BREAK-----------

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    console.log("Breaking the loop at ", i);
    break;
  }
}
// loop stop at break limit even it was supposed to num till 10

//      --------------CONTINUE---------------

// the continue is used to skip the current and continue with the rest

// for (let k = 0; k <= 10; k++) {
//   if (k % 2 == 0) {
//     continue;
//   }
//   console.log(k);
// }

// for (let k = 0; k <= 10; k++) {
//     if (k==5  || k==7) {
//         console.log("The number is skipped",k)
//       continue;
//     }
//     console.log(k);
//   }

/*

SWITCH STATMENT


--------- SWITCH STATTEMENT ----------
 The switch stattment is used to execute on case from multiple possible cases.
It is often used as an alternative to multiple if ....else if conditions

simply ..
Switch statement is used to match a condition with
multiple matching conditions .. which is an alternate to multiple if elseif statements



Each case is checked against the expression.
If a case matches, the corresponding code block runs.
The break statement prevents fall-through (executing multiple cases).
The default case runs if no case matches (like an else statement).
syntax


swith (expresion){
     case value1:
         code block
         breake;

      case value2:
         code block
         breake;   
         
    default :
        default code block
        break;

}


1. each code is checked against expression
2. if the code matches the curresponding bloack runs
3. the breake statment prevent the fall through (ececuting multiple cases)
4. the defualt case run if no case matches(like an else statment)

*/

let thsStudent = "shamil";

switch (thsStudent) {
  case "ishwari":
    console.log("Hello from ishwari");
    break;
  case "azhar":
    console.log("Hello from azhar");
    break;
  case "shamil":
    console.log("Hello from shamil");
    break;
  default:
    console.log("The condition doen'nt meet requirment");
}
