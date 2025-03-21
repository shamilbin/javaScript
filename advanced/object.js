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
