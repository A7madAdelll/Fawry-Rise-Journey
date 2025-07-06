"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biscuits = void 0;
const product_1 = require("./product");
class Biscuits extends product_1.Product {
    constructor(price, date, quantity) {
        super("Biscuits", price, quantity);
        this.expiryDate = date;
    }
}
exports.Biscuits = Biscuits;
