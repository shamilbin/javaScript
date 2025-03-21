//              sir's code



let person = {
    fname: 'Suhail',
    age: 22
}

person.city = "Hyd";
console.log(person)
person.city = "Mumbai"
console.log(person)
delete person.city;
console.log(person);

// for in loop

for (let a in person) {
    // console.log(a)
    // console.log(person[a])
    console.log(a, person[a])
}










//      shamil's code


let person = {
  names: "shamil",
  age: 22,
};

person.addres = "thavarakkadan";

person.addres = "hydrabad";
console.log(person);

delete person.addres;

console.log(person);

for (let a in person) {
  console.log(a);
}

for (let b in person) {
  console.log(b,person[b]);
}
