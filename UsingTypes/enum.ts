// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Joris",
  age: 24,
  hobbies: ["sport", "cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("type ADMIN is correct");
}
