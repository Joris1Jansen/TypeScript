"use strict";
// GENERIC FUNCTION
function genericFunction(x) {
    return x;
}
const genericArrowFunction = (x) => x;
// GENERIC CLASS
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
const chocoCakes = [{ expiryDate: new Date() }];
const vanillaCakes = [{ expiryDate: new Date() }];
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};
const expiredChocoCakes = getExpiredItems(chocoCakes);
const expiredVanillCakes = getExpiredItems(vanillaCakes);
console.log(expiredChocoCakes);
console.log(expiredVanillCakes);
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    },
};
