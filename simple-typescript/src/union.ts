function someFn(myArgument: string | number | boolean) {
  if (typeof myArgument === "string") {
    var x = myArgument.toUpperCase();
  } else if (typeof myArgument === "number") {
    myArgument.toFixed();
  } else {
      myArgument.
  }
}

// ANIMALS interface/function

interface Dog {
    bark(): void;
    walk(): void;
}

interface Cat {
    meow(): void;
    walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
    return (<Dog>someObj.bark !== undefined)
}

function callMyPet(pet: Dog | Cat) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark()
    } else {
        pet.meow()
    }
}

// FOOBAR Class
class Foo {
    foo: number;
    commonProp: string;
}

class Bar {
    bar: number;
    commonProps: string;
}

function foorBarFunction(obj: Foo | Bar) {
    if (obj instanceof Foo) {
        obj.foo
    } else {
        obj.bar()
    }
}