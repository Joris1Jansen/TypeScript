import _ from "lodash";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";

console.log(_.shuffle([1, 2, 3, 4, 5, 6]));

const products = [
  { title: "A book 2.0", price: 12.99 },
  { title: "A carpet", price: 10.99 },
];

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

const newProduct = new Product("", -5);
validate(newProduct).then((errors) => {
  if (errors.length() > 0) {
    console.log("VALIDATION ERROR");
    console.log(errors);
  } else {
    console.log(newProduct.getInformation());
  }
});
