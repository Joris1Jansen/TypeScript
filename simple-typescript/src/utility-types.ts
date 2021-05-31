interface Starship {
  name: string;
  enableHyperjump: boolean;
}

type StarshipNameOnly = Pick<Starship, "name">;
type StartshipWithoutName = Omit<Starship, "name">;

const updateStarship = (id: number, startship: Partial<Starship>) => {};

updateStarship(1, {
  name: "Explorer",
});

const starships: Record<string, Starship> = {
  Explorer1: {
    name: "Explorer1",
    enableHyperjump: true,
  },
  Explorer2: {
    name: "Explorer2",
    enableHyperjump: false,
  },
};

interface StarshipProperties {
  color?: "blue" | "red" | "green";
}

function PaintStarship(
  id: number,
  color: NonNullable<StarshipProperties["color"]>
) {
  return {
    id,
    color,
  };
}

type PaintStartshipReturn = ReturnType<typeof PaintStarship>;

PaintStarship(1, "blue");

// <---------------> //

type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";

let JohnsDrink: AvailableDrinks;
JohnsDrink = "Coffee";

type DrinksJaneDoesntLike = "Coffee" | "Orange Juice";
type DrinksJaneLikes = "Tea" | "Lemonade" | "Mojito";
let JaneDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
let JaneDrinks: Extract<AvailableDrinks, DrinksJaneLikes>;

// <---------------> //

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean = false;
    delete() {}
  };
}

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableUserIntance = InstanceType<typeof DeletableUser>;
type DeletableCarInstance = InstanceType<typeof DeletableCar>;

class Profile {
  user!: DeletableUserIntance;
  car!: DeletableCarInstance;
}

const profile = new Profile();
profile.user = new DeletableUser("John");
profile.car = new DeletableCar("Ferrari");

// <---------------> //

interface MyObject {
  sayHello(): void;
}

interface MyObjectThis {
  helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
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

// <--------> //

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
