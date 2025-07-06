"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const cheese_1 = require("../products/cheese");
const tv_1 = require("../products/tv");
function convertProductClassToString(productClass) {
    return productClass.name;
}
class Cart {
    constructor(ecommerceController) {
        this.products = {};
        this.ecommerceController = ecommerceController;
    }
    add(productClass, quantity) {
        const canAddingBeDone = this.ecommerceController.CheckIfCanAddProductToCart(productClass, quantity);
        if (!canAddingBeDone) {
            throw new Error(`Not enough ${productClass.name} in the store`);
        }
        const key = convertProductClassToString(productClass);
        if (!this.products[key]) {
            this.products[key] = {
                quantity: 0,
                price: this.ecommerceController.getprice(productClass),
            };
            if (productClass === tv_1.Tv || productClass === cheese_1.Cheese) {
                this.products[key].weight =
                    this.ecommerceController.getWeight(productClass);
            }
        }
        this.products[key].quantity += quantity;
    }
    getCartItems() {
        return this.products;
    }
    remove(productClass, quantity) {
        const key = productClass.name;
        if (!this.products[key]) {
            throw new Error(`${key} is not in the cart`);
        }
        this.products[key].quantity -= quantity;
        if (this.products[key].quantity <= 0) {
            delete this.products[key];
        }
    }
}
exports.Cart = Cart;
