function add(n1: number, n2: number) {
  return n1 + n2;
}

//Function that returns nothing -> void
function printResult(num: number): void {
  console.log("Result " + num);
}

function AddAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 6));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

AddAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
