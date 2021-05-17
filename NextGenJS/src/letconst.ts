const userName = "Joris Jansen 123";
// userName = 'Sophie'

let age = 30; // same as var
age = 29;

function add(a: number, b: number) {
  var result;
  result = a + b;
  return result;
}

if (age > 20) {
  var isOld = true;
}

// console.log(isOld);

// console.log(result); // Doesn't work, var is only available inside function
