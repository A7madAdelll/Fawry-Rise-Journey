"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = exports.store = void 0;
const biscuits_1 = require("./products/biscuits");
const cheese_1 = require("./products/cheese");
const mobile_1 = require("./products/mobile");
const mobile_scratch_cards_1 = require("./products/mobile_scratch_cards");
const tv_1 = require("./products/tv");
class Store {
    constructor(feesOnShipingPerKg) {
        this.products = {};
        this.feesOnShipingPerKg = 0.5;
        this.feesOnShipingPerKg = feesOnShipingPerKg;
    }
    addToCart(ProductClass, quantity) {
        if (this.products[ProductClass.name].quantity >= quantity) {
            this.products[ProductClass.name].quantity -= quantity;
            return true;
        }
        else {
            return false;
        }
    }
    setUpProducts() {
        this.products.Cheese = { product: new cheese_1.Cheese(50, 1), quantity: 10 };
        this.products.Tv = { product: new tv_1.Tv(1000, 1), quantity: 10 };
        this.products.Mobile = { product: new mobile_1.Mobile(800), quantity: 10 };
        this.products.MobleScratchCards = {
            product: new mobile_scratch_cards_1.MobleScratchCards(5),
            quantity: 10,
        };
        this.products.Biscuits = { product: new biscuits_1.Biscuits(10), quantity: 10 };
    }
}
exports.Store = Store;
const store = new Store(0.5);
exports.store = store;
store.setUpProducts();
