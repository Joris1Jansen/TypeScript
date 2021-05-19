// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number;

  constructor(a: number, n?: string) {
    if (n) {
      this.name = n;
      this.age = a;
    } else {
      this.age = a;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi unknown");
    }
  }
}

user1 = new Person(24, "Joris");
user2 = new Person(25);

// user1 = {
//   name: "Joris",
//   age: 24,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

console.log(user1);
user1.greet("Hi!");
