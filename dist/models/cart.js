"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const biscuits_1 = require("./products/biscuits");
const cheese_1 = require("./products/cheese");
const mobile_1 = require("./products/mobile");
const mobile_scratch_cards_1 = require("./products/mobile_scratch_cards");
const tv_1 = require("./products/tv");
// import { Product } from "./product";
class Cart {
  constructor() {
    this.products = [];
  }
  add(product, quantity) {
    if (product.getQuantity() >= quantity) {
      this.products.push(product);
      product.setQuantity(product.getQuantity() - quantity);
    } else {
      throw new Error(`not enouph ${product.name} in the store`);
    }
  }
}
const cart = new Cart();
biscuits_1.Biscuits.quantity = 10;
cheese_1.Cheese.quantity = 10;
mobile_1.Mobile.quantity = 10;
mobile_scratch_cards_1.MobleScratchCards.quantity = 10;
tv_1.Tv.quantity = 10;
cart.add(new biscuits_1.Biscuits(30), 5);
cart.add(new biscuits_1.Biscuits(30), 5);

cart.add(new cheese_1.Cheese(30, 1), 1);
cart.add(new mobile_1.Mobile(30), 1);
cart.add(new mobile_scratch_cards_1.MobleScratchCards(30), 1);
cart.add(new tv_1.Tv(30, 1), 1);
console.log(cart);
