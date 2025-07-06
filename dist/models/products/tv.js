"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
const product_1 = require("./product");
class Tv extends product_1.Product {
    constructor(price, weight, quantity) {
        super("Tv", price, quantity);
        this.weight = weight;
    }
}
exports.Tv = Tv;
