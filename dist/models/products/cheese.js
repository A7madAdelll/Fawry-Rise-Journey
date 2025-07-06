"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cheese = void 0;
const product_1 = require("./product");
class Cheese extends product_1.Product {
    constructor(price, weight, date, quantity) {
        super("Cheese", price, quantity);
        this.expiryDate = date;
        this.weight = weight;
    }
}
exports.Cheese = Cheese;
