const fun = ["sports", "cooking"];
const activeFun = ["hiking"];

const [sport1, sport2] = fun;
console.log(sport1);

const peoplePerson = {
  firstName: "Joris",
  personAge: 24,
};

const { firstName: overWritten, personAge } = peoplePerson;
console.log(overWritten, personAge);
