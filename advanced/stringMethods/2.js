
// let num = 10;
// console.log(num.toString(2))

// decimal == > all number system 

// toString is used to perform Number System
// binary == 2
// octal == 8
// hexadecimal = 16


// function numberSystem(input) {
//     console.log(`My input is ${input}`)
//     return {
//         binary: input.toString(2),
//         octal: input.toString(8),
//         hexa: input.toString(16)
//     }
// }

// let final = numberSystem(11)
// console.log(final)



// function numberSystem(num) {
//     let myObject = {
//         binary: num.toString(2),
//         octal: num.toString(8),
//         hexa: num.toString(16)
//     }
//     return myObject
// }

// let final = numberSystem(11)
// console.log(final)

// let num = 11;
// console.log(num.toString(2))

function convert(input) {
    let system = {
        binary: input.toString(2),
        octal: input.toString(8),
        hexa: input.toString(16)
    }
    console.log(system)

}

convert(10)
