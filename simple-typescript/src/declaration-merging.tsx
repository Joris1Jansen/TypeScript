/////
interface Cart {
  calculateTotal(): number;
}
/////

interface Cart {
  x: number;
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
  x: 1,
  calculateTotal(options?: { discountCode: number }) {
    if (options && options.discountCode) {
      // apply code
    }
    return 1;
  },
};

// ----------------------------- //

namespace MyNameSpace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}

namespace MyNameSpace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number;
  }
}

MyNameSpace.getX();

// ----------------------------- //

function someFunction() {
  return 10;
}

namespace someFunction {
  export const someProperty = 10;
}

someFunction.someProperty;

enum Vegetables {
  Tomato = "tomato",
  Onion = "onion",
}

namespace Vegetables {
  export function makeSalad() {
    return Vegetables.Onion + Vegetables.Tomato;
  }
}

const salad = Vegetables.makeSalad();

// ----------------------------- //

class Salad {}

namespace Salad {
  export const availableDressings = ["Abc", "Xyz"];
}

Salad.availableDressings.includes("Abc");

// ----------------------------- //

import * as React from "react";
import { renderToString } from "react-dom/server";

declare module "react" {
  interface Component {
    helloWorld(): string;
  }
}

React.Component.prototype.helloWorld = function () {
  return "Hello World";
};

class MyComponent extends React.Component {
  render() {
    return <div>{this.helloWorld()}</div>;
  }
}

console.log(renderToString(<MyComponent />));
