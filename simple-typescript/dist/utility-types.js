"use strict";
const updateStarship = (id, startship) => { };
updateStarship(1, {
    name: "Explorer",
});
const starships = {
    Explorer1: {
        name: "Explorer1",
        enableHyperjump: true,
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperjump: false,
    },
};
function PaintStarship(id, color) {
    return {
        id,
        color,
    };
}
PaintStarship(1, "blue");
let JohnsDrink;
JohnsDrink = "Coffee";
let JaneDrink;
let JaneDrinks;
function Deletable(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.deleted = false;
        }
        delete() { }
    };
}
class Car {
    constructor(name) {
        this.name = name;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);
class Profile {
}
const profile = new Profile();
profile.user = new DeletableUser("John");
profile.car = new DeletableCar("Ferrari");
const myObject = {
    sayHello() {
        return this.helloWorld();
    },
};
myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return "Hello World!";
    },
});
console.log(myObject.sayHello());
function makeObject(desc) {
    let data = desc.data || {};
    let methods = desc.methods || {};
    return Object.assign(Object.assign({}, data), methods);
}
let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx, dy) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        },
    },
});
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
