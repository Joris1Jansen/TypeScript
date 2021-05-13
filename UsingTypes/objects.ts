const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // TUPLE, 2 types, first element is a number second element a string.
} = {
  name: "Joris",
  age: 24,
  hobbies: ["sport", "cooking"],
  role: [2, "author"],
};

person.role.push("admin"); //Push is allowed on a tuple.
// person.role[1] = 10;

let favouriteActivities: string[];
favouriteActivities = ["sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
