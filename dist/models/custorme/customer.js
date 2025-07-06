"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const cart_1 = require("../cart/cart");
class Customer {
    constructor(name, palance, Store, ecommerceController) {
        this.name = name;
        this.palance = palance;
        this.cart = new cart_1.Cart(ecommerceController);
    }
}
exports.Customer = Customer;
