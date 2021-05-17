const add4 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

// Also sets an amount of arguments
const add5 = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add4(5, 4, 5, 6, 1, 2);
const addNumbers = add5(1, 2, 3);
console.log(addedNumbers);
console.log(addNumbers);
