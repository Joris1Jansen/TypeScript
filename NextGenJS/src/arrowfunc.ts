const add2 = (a: number, b: number) => {
  return a + b;
};

const add3 = (a: number, b: number = 0) => a + b; //setting a default value

console.log(add2(2, 5));
console.log(add3(5, 4));
console.log(add3(5));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}
