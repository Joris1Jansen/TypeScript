const hobbies = ["sports", "cooking"];
const activeHobbies = ["hiking"];

console.log(hobbies);
console.log(activeHobbies);

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name: "Joris",
  age: 24,
};

const copiedPerson1 = person;
console.log(copiedPerson1);

const copiedPerson2 = { ...person };
console.log(copiedPerson2);

person.age = 20;
console.log(copiedPerson1);
console.log(copiedPerson2);
