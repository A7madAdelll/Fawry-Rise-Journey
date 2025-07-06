"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
const product_1 = require("./product");
class Mobile extends product_1.Product {
    constructor(price, quantity) {
        super("Mobile", price, quantity);
    }
}
exports.Mobile = Mobile;
