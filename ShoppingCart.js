class ShoppingCart {
  constructor() {
    this.stuff = [];
  }

  getItems() {
    return this.stuff;
  }

  addItem(itemName, quantity, price) {
    const item = { name: itemName, quantity: quantity, pricePerUnit: price };
    this.stuff.push(item);
  }

  clear() {
    console.log("hoi");
    this.stuff = [];
    console.log("why not");
  }

  total(cumulator, pricePerUnit) {
    console.log("total");
  }
}

// class item {
//   constructor(itemName, quantity, price) {
//     this.itemName = itemName;
//     this.quantity = quantity;
//     this.price = price;

//   }
// }

//const awesomeFunctions = require("./1-ShoppingCart.spec");
//console.log(awesomeFunctions);

module.exports = ShoppingCart;
