let person = {
  name: "shamil",
  age: 23,
  place: `kavanoor`,
};

let student = [`Hisham`, 29, true, null, "kavanoor"];

console.log(person);
console.log(student);

//  CRUD operaton in both object and array

//      ADD

person.city = "kerlala";
student.unshift("India");

console.log(person);
console.log(student);

//      update

person.place = "manjeri";
student[2] = true;

console.log(person);
console.log(student);

//          DELETE

delete person.age;
student.shift();

let newDelet = student.pop();
student.pop();

console.log(person);
console.log(student);
console.log(newDelet);
