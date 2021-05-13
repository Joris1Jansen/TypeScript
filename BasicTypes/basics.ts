// Primitives: number, string, boolean
let age: number;
age = 12;

let userName: string;
userName = "Joris ";

let isInstructor: boolean;
isInstructor = false;

console.log(userName + age + isInstructor);

// More complex types
let hobbies: string[];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Joris",
  age: 24,
};

// person = {
//   isEmployee: true,
// };

// Array of persons
let people: {
  name: string;
  age: number;
}[];

// Type inference
let course = "React - the complete guide";
// course = 123;

// Union type
let courses: string | number = "React - the complete guide";
courses = 123;

// Aliases
type Person = {
  name: string;
  age: number;
};

let Joris: Person;

// Functions & Types (not a must!!)
function add(a: number, b: number): number | string {
  return a + b;
}

// Void, returns nothing
function printOutput(value: any): void {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const numberArray = [1, 2, 3];
const updatedNumberArray = insertAtBeginning(numberArray, -1);
console.log(updatedNumberArray);

const stringArray = ["react", "vue", "angular"];
const updatedStringArray = insertAtBeginning(stringArray, "jQuery");
console.log(updatedStringArray);
